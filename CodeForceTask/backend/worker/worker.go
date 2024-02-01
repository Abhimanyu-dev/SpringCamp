package worker

import (
	"fmt"
	"io"
	"net/http"
	"encoding/json"
	"time"
	cfapi "github.com/Abhimanyu-dev/CodeForce/cfapi"
	models "github.com/Abhimanyu-dev/CodeForce/models"
	store "github.com/Abhimanyu-dev/CodeForce/store"	
)

func PerformWork(){
	maxTime := int32(0)
	for {
		m := store.MongoStore{}
		err := m.OpenConnectionWithMongoDB()
		if err != nil{
			fmt.Println("Error:1 ", err)
		}
		fmt.Println("Connection Establsihed With MongoDB")
		time.Sleep(2*time.Second)

		type Response struct{
			Result []models.RecentAction `json:"result" bson:"result"`
		}
		client := cfapi.ApiClient{}
		req, _ :=  http.NewRequest("GET", "https://codeforces.com/api/recentActions?maxCount=30", nil)
		resp, err := client.Client.Do(req)

		if err != nil{
			fmt.Println("Error:2 ",err)
		}

		resBody, _ := io.ReadAll(resp.Body)

		var resjson Response
		if err = json.Unmarshal(resBody, &resjson); err != nil{
			fmt.Println("Error:3 ", err)
		}

		fmt.Println("Received data from API")

		time.Sleep(2*time.Second)

		m.StoreRecentActionsInTheDatabase(resjson.Result, maxTime)

		fmt.Println("Stored Data")

		time.Sleep(2*time.Second)

		_, err = m.QueryRecentActions()

		if err != nil{
			fmt.Println("Error:4 ",err)
		}

		maxTime, err = m.GetMaxTimeStamp()
		if err != nil{
			fmt.Println("Error:5 ",err)
		}
		fmt.Println("Max Time: ",maxTime)

		time.Sleep(5*time.Minute)
	}

}