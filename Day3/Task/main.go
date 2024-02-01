package main

import (
	// "encoding/json"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

type Response struct{
	Result 	[]struct {
		BlogEntry struct {
			Author string `json:"authorHandle"`
			ID int `json:"id"`
			Title string `json:"title"`
		} `json:"blogEntry"`
		Comment struct {
			Time int `json:"creationTimeSeconds"`
			ID int `json:"id"`
			Text string `json:"text"`
		} `json:"comment"`
	} `json:"result"`
}

func FetchData() Response{
	resp, err := http.Get("https://codeforces.com/api/recentActions?maxCount=30")
	if err!=nil{
		fmt.Println("Error Making Request ", err)
		os.Exit(1)
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil{
		fmt.Print("Error Making Request ", err)
	}
	var resjson Response
	if err := json.Unmarshal(respBody, &resjson); err != nil{
		fmt.Println("Error: ", err)
	}
	
	return resjson
}
