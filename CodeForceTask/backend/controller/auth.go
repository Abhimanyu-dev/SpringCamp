package controllers

import (
	"net/http"
  	"github.com/gin-gonic/gin"
	model "github.com/Abhimanyu-dev/CodeForce/models"
	store "github.com/Abhimanyu-dev/CodeForce/store"
	"golang.org/x/crypto/bcrypt"
	"log"
)


func Register(c *gin.Context){
	var input model.User

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	m := store.MongoStore{}

	if err := m.OpenConnectionWithMongoDB(); err != nil{
		log.Panic(err)
	}

	hashedPassword := HashPassword(input.Password)

	user := model.User{Username:input.Username, Password:hashedPassword}

	if err := m.StoreUserInTheDatabase(user); err != nil{
		c.JSON(http.StatusInternalServerError, gin.H{"message ": err.Error()})
		return 
	}


	c.JSON(http.StatusOK, gin.H{"message": "User registered Succesfully"})  

	
}

func Login(c *gin.Context){
	var input model.User

	if err := c.ShouldBindJSON(&input); err != nil{
		log.Panic(err)

		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	m := store.MongoStore{}

	if err := m.OpenConnectionWithMongoDB(); err != nil{
		log.Panic(err)

		c.JSON(http.StatusInternalServerError, gin.H{"Error: ": err.Error()})
		return
	}

	token, err := m.LoginCheck(input)

	if err != nil {
		log.Panic(err)
		c.JSON(http.StatusInternalServerError, gin.H{"Error: ": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})


}

func HashPassword(password string) string{
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)

	if err != nil{
		panic(err)
	}

	return string(bytes)
}

