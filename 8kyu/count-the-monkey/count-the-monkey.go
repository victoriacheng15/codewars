package main

import "fmt"

// func monkeyCount(n int) []int {
// 	var res []int
// 	for i := 1; i <= n; i ++ {
// 		res = append(res, i)
// 	}

// 	return res
// }

func monkeyCount(n int) []int {
	res := make([]int, n)

	for i := range res {
		res[i] = i + 1
	}

	return res
}

func main() {
	fmt.Println(monkeyCount(5))
}