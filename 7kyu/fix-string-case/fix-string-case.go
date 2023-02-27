package main

import (
	"fmt"
	"regexp"
	"strings"
)

func solve(str string) string {
	lowerRegex := regexp.MustCompile(`[a-z]`)
	lowerCount := len(lowerRegex.FindAllString(str, -1))
	upperCount := len(str) - lowerCount

	if lowerCount >= upperCount {
		return strings.ToLower(str)
	} else {
		return strings.ToUpper(str)
	}
}

func main() {
	fmt.Println(solve("CODe"))
}
