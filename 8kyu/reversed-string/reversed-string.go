package main

import "fmt"

func Solution(word string) (result string) {
	for _, char := range word {
		result = string(char) + result
	}

	return result
}

func main() {
	fmt.Println(Solution("Hello"))
}
