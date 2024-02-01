package main

import (
	"context"
	"fmt"

	// "go.mongodb.org/mongo-driver/bson" 
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Comment struct{
	Text string `bson:"text"`
	ID int `bson:"id"`
}

func main() {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI("mongodb+srv://abhimanyusolanki4841:abhi@cluster0.ivhnqt1.mongodb.net/"))
	if err != nil {
		panic(err)
	}

	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	coll := client.Database("SpringCamp").Collection("RecentActions")
	newComment := Comment{Text: "HELLO", ID: 1234}

	result, err := coll.InsertOne(context.TODO(), newComment)
	if(err!=nil){
		panic(err)
	}


	fmt.Println(result)
}
