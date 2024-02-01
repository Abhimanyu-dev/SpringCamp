package server

import (
	"github.com/gin-gonic/gin"
	store "github.com/Abhimanyu-dev/CodeForce/store"
	controllers "github.com/Abhimanyu-dev/CodeForce/controller"
	middlewares "github.com/Abhimanyu-dev/CodeForce/middlewares"
)

func Server(port string){
	r := gin.Default()

	

	r.POST("/register", controllers.Register)

	r.POST("/login", controllers.Login)

	r.Use(middlewares.JwtAuthMiddleware())

	r.GET("/", func(c *gin.Context){
		m := store.MongoStore{}
		if err := m.OpenConnectionWithMongoDB(); err != nil{
			panic(err)
		}
		actions, err := m.QueryRecentActions()
		if err != nil{
			panic(err)
		} 
		c.JSON(200, actions)
	})

	r.Run(":"+port)
}