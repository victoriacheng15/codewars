package main

import (
	"fmt"
	"strconv"
)

func SumMix(arr []any) (result int) {
  for _, num := range arr {
		if el, ok := num.(int); ok {
			result += el
		} else if str, ok := num.(string); ok {
			i, _ := strconv.Atoi(str)
			result+= i
		}
	}
	return result
}

func main() {
	fmt.Println(SumMix([]any{9, 3, "7", "3"}))
}
