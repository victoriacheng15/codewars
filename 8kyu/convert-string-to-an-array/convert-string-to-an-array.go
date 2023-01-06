package main

import (
	"fmt"
	"strings"
)

// func StringToArray(str string) []string {
// 	return strings.Fields(str)
// }

func StringToArray(str string) []string {
	a := strings.Split(str, " ")
	return a
}

func main() {
	fmt.Println(StringToArray("1 2 3"))
	fmt.Println(StringToArray("I love arrays they are my favorite"))
}