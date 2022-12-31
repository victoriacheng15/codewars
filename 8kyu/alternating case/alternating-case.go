package main

import (
	"fmt"
	"strings"
)


func ToAlternatingCase(str string) string {
	var res strings.Builder
	for _, char := range str {
		if string(char) == strings.ToUpper(string(char)) {
			res.WriteString(strings.ToLower(string(char)))
		} else {
			res.WriteString(strings.ToUpper(string(char)))
		}
	}
  return res.String()
}

func main() {
	fmt.Println(ToAlternatingCase("hello world"))
	fmt.Println(ToAlternatingCase("1a2b3c4d5e")) 
}