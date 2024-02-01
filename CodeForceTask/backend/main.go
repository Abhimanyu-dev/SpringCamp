package main

import (
	worker "github.com/Abhimanyu-dev/CodeForce/worker"
	server "github.com/Abhimanyu-dev/CodeForce/server"
	"sync"
	"os"
)

func main(){
	
	os.Setenv("API_SECRET", "SPRING_CAMP")
	os.Setenv("TOKEN_HOUR_LIFESPAN", "1")
	var wg sync.WaitGroup

	wg.Add(1)
	go  func(){
		defer wg.Done()
		worker.PerformWork()
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		server.Server("3000")
	}()

	wg.Wait()
}