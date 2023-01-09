package main

import (
	"fmt"
)

// func OddCount(n int) int{
//   count := 0
// 	for i := 0; i < n; i += 1 {
// 		if i % 2 == 1 {
// 			count++
// 		}
// 	}
// 	return count
// }

func OddCount(n int) int {
	return n / 2
}

func main() {
	fmt.Println(OddCount(15))
	fmt.Println(OddCount(15023))
}