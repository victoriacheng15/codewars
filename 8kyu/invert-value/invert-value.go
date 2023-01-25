package main

import (
	"fmt"
)

// func Invert(arr []int) []int {
//   res := []int{}
// 	for i := 0; i < len(arr); i++ {
// 		res = append(res, -arr[i])
// 	}
// 	return res
// }

func Invert(arr []int) (result []int) {
	for _, num := range arr {
		result = append(result, num*-1)
	}

	return result
}

func main() {
	fmt.Println(Invert([]int{1, 2, 3}))
}
