package main

import "fmt"

func Grow(arr []int) int {
	prod := 1

	for _, num := range arr {
		prod *= num
	}

	return prod
}

func main() {
	fmt.Println(Grow([]int{1, 2, 3}))    // 6
	fmt.Println(Grow([]int{1, 2, 3, 4})) // 24
}
