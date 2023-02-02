package main

import "fmt"

func Solution(a, b string) string {
	if len(a) > len(b) {
		return b + a + b
	}
	return a + b + a
}

func main() {
	fmt.Println(Solution("45", "1"))
}
