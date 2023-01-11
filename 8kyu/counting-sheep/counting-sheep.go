package main

import "fmt"

func CountSheeps(numbers []bool) int {
  var count int
	for _, value := range numbers {
		if value {
			count++
		}
	}
	return count
}

func main() {
	arr := []bool{
		true,  true,  true,  false,
		true,  true,  true,  true ,
		true,  false, true,  false,
		true,  false, false, true ,
		true,  true,  true,  true ,
		false, false, true,  true,
	}
	fmt.Println(CountSheeps(arr))
}