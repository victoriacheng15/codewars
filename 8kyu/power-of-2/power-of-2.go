package main

import "math"

func PowersOfTwo(n int) (result []uint64) {
	for num := 0; num <= n; num++ {
		result = append(result, uint64(math.Pow(2, float64(num))))
	} 

	return result
}