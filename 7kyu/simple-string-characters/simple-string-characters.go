package main

import (
	"regexp"
)

func GetLength(regex *regexp.Regexp, s string) int {
	return len(regex.FindAllString(s, -1))
}

func Solve(s string) []int {
	uppercase := regexp.MustCompile(`[A-Z]`)
	lowercase := regexp.MustCompile(`[a-z]`)
	numbers := regexp.MustCompile(`\d`)
	special := regexp.MustCompile(`\W`)

	return []int{
		GetLength(uppercase, s),
		GetLength(lowercase, s),
		GetLength(numbers, s),
		GetLength(special, s),
	}
}
