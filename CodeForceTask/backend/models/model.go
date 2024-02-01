package models

import "go.mongodb.org/mongo-driver/bson/primitive"


type BlogEntry struct{
	Author string `json:"authorHandle" bson:"Author"`
	ID int `json:"id" bson:"ID"`
	Title string `json:"title" bson:"Title"`
}

type Comment struct{
	Commentator string `json:"commentatorHandle" bson:"Commentator"`
	ID int `json:"id" bson:"ID"`
	Text string `json:"text" bson:"Text"`
}

type User struct{
	ID primitive.ObjectID `bson:"_id"`
	Username string `json:"username" bson:"username" binding:"required" validate:"unique"`
	Password string	`json:"password" bson:"password" binding:"required"`
}

type RecentAction struct{
	Blog BlogEntry `json:"blogEntry" bson:"Blog"`
	Comment Comment `json:"comment,omitempty" bson:"Comment,omitempty"`
	Time int32 `json:"timeSeconds" bson:"Time"`
}