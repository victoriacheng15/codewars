package main

import "regexp"

func Disemvowel(comment string) string {
	regex := regexp.MustCompile("(?i)[aeiou]")
	return regex.ReplaceAllString(comment, "")
}
