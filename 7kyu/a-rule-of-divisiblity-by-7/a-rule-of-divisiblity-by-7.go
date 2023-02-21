package main

import (
	"strconv"
)

func Seven(n int64) []int {
	steps := 0
	for len(strconv.Itoa(int(n))) > 2 {
		n = n / 10 - 2 * (n % 10)
		steps++
	}
	return []int{int(n), steps}
}