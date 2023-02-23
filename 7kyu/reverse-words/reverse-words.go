package main

import (
	"fmt"
	"strings"
)

// func ReverseWords(str string) string {
// 	words := strings.Split(str, " ")
// 	for i, word := range words {
// 		runes := []rune(word)
// 		for i, j := 0, len(runes) - 1; i < j; i, j = i+1, j-1 {
// 			runes[i], runes[j] = runes[j], runes[i]
// 		}
// 		words[i] = string(runes)
// 	}

// 	return strings.Join(words, " ")
// }

func ReverseWords(str string) string {
	words := strings.Split(str, " ")
	for i, word := range words {
		rev := ""
		for _, char := range word {
			rev = string(char) + rev
		}
		words[i] = rev
	}

	return strings.Join(words, " ")
}

func main() {
	fmt.Println(ReverseWords("Let's take LeetCode contest"))
	fmt.Println(ReverseWords("This is an example!"))
}