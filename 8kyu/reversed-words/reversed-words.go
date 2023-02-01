package main

import (
	"fmt"
	"strings"
)

// func ReverseWords(str string) string {
// 	words := strings.Split(str, " ")
// 	for i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
// 		words[i], words[j] = words[j], words[i]
// 	}
// 	return strings.Join(words, " ")
// }

func ReverseWords(str string) (result string) {
	words := strings.Fields(str)
	for _, word := range words {
		result = word + " " + result
	}

	return result
}

func main() {
	fmt.Println(ReverseWords("Hello World"))
}
