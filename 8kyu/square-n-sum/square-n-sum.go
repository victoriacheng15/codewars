package main

import "fmt"

func SquareSum(numbers []int) int {
	result := 0
	for _, number := range numbers {
		result += number * number
	}

	return result
}

func main() {
	fmt.Println(SquareSum([]int{1, 2}))
}
