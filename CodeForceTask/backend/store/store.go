package store

import (
	"context"
	"errors"
	"time"

	models "github.com/Abhimanyu-dev/CodeForce/models"
	token "github.com/Abhimanyu-dev/CodeForce/utils/token"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"golang.org/x/crypto/bcrypt"
)

type MongoStore struct{
	RecentActions *mongo.Collection
	Users *mongo.Collection
}

func (m *MongoStore) OpenConnectionWithMongoDB() (error){
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb+srv://abhimanyusolanki4841:abhi@cluster0.ivhnqt1.mongodb.net/"))
	if err != nil{
		return err
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil{
		return err
	}

	m.RecentActions = client.Database("SpringCamp").Collection("RecentActions")
	m.Users = client.Database("SpringCamp").Collection("Users")
	
	return nil
}

func (m *MongoStore) StoreRecentActionsInTheDatabase(actions []models.RecentAction, time int32) (error){
	for _, action := range actions{
		if action.Time > time{
			_, err := m.RecentActions.InsertOne(context.TODO(), action)
			if err != nil{
				return err
			}
		}
	}

	return nil
}

func (m *MongoStore) StoreUserInTheDatabase(input models.User) (error){
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	count, err := m.Users.CountDocuments(ctx, bson.M{"username" : input.Username})

	defer cancel()

	if err != nil {
		return err
	}
	if count > 0{
		return errors.New("Username in use")
	}

	input.ID = primitive.NewObjectID()

	_, err = m.Users.InsertOne(ctx, input)
	if err != nil{
		return err
	}
	defer cancel()
	return nil
}

func VerifyPassword(userPassword string, providedPassword string) (bool, error){
	err := bcrypt.CompareHashAndPassword([]byte(userPassword), []byte(providedPassword))
	check := true
	msg := ""

	if err != nil{
		check = false
		msg = "Wrong Username or Password"
	}
	return check, errors.New(msg)
}

func (m *MongoStore) LoginCheck(input models.User) (string, error){
	var err error
	var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)

	user := models.User{}

	err = m.Users.FindOne(ctx, bson.M{"username": input.Username}).Decode(&user)
	defer cancel()
	if err != nil{
		return "", err
	}

	check, err := VerifyPassword(user.Password, input.Password)

	if check != true{
		return "", err
	}
	
	token, err := token.GenerateToken(user.ID)

	if err != nil{
		return "", err
	}

	return token, err
}


func (m *MongoStore) QueryRecentActions() ([]models.RecentAction, error){
	cursor, err := m.RecentActions.Find(context.TODO(), bson.D{{}}, options.Find())

	if err != nil {
		return nil, err
	}

	var result []models.RecentAction
	err = cursor.All(context.TODO(), &result)

	return result, nil	
}

func (m *MongoStore) GetMaxTimeStamp() (int32, error){
	groupStage := bson.D{
		{
			"$group" , bson.D{
				{"_id", nil},	
				{"max", bson.D{{"$max", "$Time"}}},
			},
		},
	}
	cursor, err := m.RecentActions.Aggregate(context.TODO(), mongo.Pipeline{groupStage})

	if err != nil{
		return int32(0), err
	}

	var results []bson.M
	if err = cursor.All(context.TODO(), &results); err != nil{
		return int32(0), err
	}

	result := results[0]["max"].(int32)

	return result, nil

}

