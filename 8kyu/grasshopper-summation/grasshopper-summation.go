package main

import "fmt"

// func Summation(n int) int {
// 	if n == 0 {
// 		return 0
// 	}

// 	return Summation(n-1) + n
// }

func Summation(n int) int {
	return n * (n + 1) / 2
}


func main() {
	fmt.Println(Summation(8))
}