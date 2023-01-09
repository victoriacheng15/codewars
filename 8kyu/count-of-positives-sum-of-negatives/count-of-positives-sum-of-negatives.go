package main

import (
	"fmt"
)

func CountPositivesSumNegatives(numbers []int) []int {
  var res []int
	positive, negative := 0, 0
	for i, n := range numbers {
		if n > 0 {
			positive++
		} else {
			negative += numbers[i]
		}
	}

	res = append(res, positive, negative)
  return res 
}

func main() {
	input := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15}
	fmt.Println(CountPositivesSumNegatives(input))
}