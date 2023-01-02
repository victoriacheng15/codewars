package main

import (
	"fmt"
)

// func Past(h, m, s int) int {
// 	times := []int{h * 60 * 60, m * 60, s}
// 	total := 0
// 	for _, time := range times {
// 		total += time
// 	}
// 	return total * 1000
// }

func Past(h, m, s int) int {
	times := []int{h * 60 * 60, m * 60, s}
	total := 0
	for i := 0; i < len(times); i += 1 {
		total += times[i]
	}

	return total * 1000
}

func main () {
	fmt.Println(Past(0, 1, 1))
	fmt.Println(Past(1, 1, 1)) 
}