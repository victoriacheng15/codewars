package main

import "fmt"

func multipleOfIndex(ints []int) []int {
	// var res []int
	// res := make([]int, 0)
	res := []int{}

	for index, num := range ints {
		if index != 0 && num%index == 0 {
			res = append(res, num)
		}
	}

	return res
}

func main() {
	fmt.Println(multipleOfIndex([]int{22, -6, 32, 82, 9, 25}))
}
