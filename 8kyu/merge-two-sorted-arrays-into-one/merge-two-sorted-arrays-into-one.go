package main

import (
	"fmt"
	"sort"
)

func Map(merged map[int]bool, arr []int) {
	for _, num := range arr {
		merged[num] = true
	}
}

func MergeArrays(arr1, arr2 []int) []int {
	merged := make(map[int]bool)

	Map(merged, arr1)
	Map(merged, arr2)

	res := make([]int, 0, len(merged))

	for key := range merged {
		res = append(res, key)
	}

	sort.Ints(res)

	return res
}

func main() {
	fmt.Println(MergeArrays([]int{1, 2, 3, 4}, []int{5, 6, 7, 8}))
}
