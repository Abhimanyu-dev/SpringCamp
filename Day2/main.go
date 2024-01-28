package main

import (
	"fmt"
)


type Cipher interface{
	Encrypt()
}

type String struct{
	Value string
}

func (s String) Encrypt() []int {

	LettersCodeMap := "UMRSQPBOLEXTZYAKJVCNHDWGIF"

	result := make([]int, 0, len(s.Value))
	
	for _, char := range s.Value{
		index := char - 'A'
		encryption := int(LettersCodeMap[index] - 'A' + 1)
		result = append(result, encryption)
	}
	return result
}

type IntegerArray struct{
	Value []int
}

func (i IntegerArray) Encrypt() []int{
	result := make([]int, 0, len(i.Value))

	for _, num := range i.Value{
		counter := 1
		for num != 1{
			if num%2 == 0{
				num /= 2
			} else{
				num = 3*num + 1
			}
			counter ++
		}
		result = append(result, counter)
	}
	return result
}

type Map struct{
	Value map[string]int
}

func (m Map) Encrypt() map[string]int{
	result := make(map[string]int)
	keys := make([]string, 0, len(m.Value))
	for key := range m.Value{
		keys = append(keys, key)
	}
	for i := range keys{
		result[keys[i]] = m.Value[keys[(i+2)%len(keys)]]
	}
	return result
}

func main() {
	var input string
	fmt.Print("Enter a value (string, []int, map[string]int) ")
	_, err := fmt.Scan(&input)
	if err != nil{
		fmt.Println("Error reading Value: ", err)
		return
	}

	switch input {
	case "string" :
			fmt.Println("Enter String")
			var userInput string
			fmt.Scan(&userInput)
			s := String{userInput}
			result := s.Encrypt()
			fmt.Println("Encrypted String: ", result)
	case "[]int" :
			fmt.Println("Enter Array Length")
			var len int;
			fmt.Scan(&len)
			fmt.Println("Enter Array Elements")
			array := make([]int, len)
			for i := 0; i < len ; i++{
				fmt.Scan(&array[i])
			}
			s := IntegerArray{array}
			result := s.Encrypt()
			fmt.Println("Encrypted Array[] ", result)
	case "map[string]int" :
			fmt.Println("Enter Map Length")
			var len, value int
			var key string
			fmt.Scan(&len)
			m := make(map[string]int)
			for i := 0; i < len ;i++{
				fmt.Println("Enter key and value")
				fmt.Scanf("%s %d\n", &key, value)
				m[key] = value
			}
			s := Map{m}
			result := s.Encrypt()
			fmt.Println("Encrypted Map: ", result)
	default:
			fmt.Println("Unsupported type")

	}
}