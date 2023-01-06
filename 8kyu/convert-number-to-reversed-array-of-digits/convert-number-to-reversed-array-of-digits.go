package main

import (
	"fmt"
	"strconv"
)

func Digitize(n int) []int {
  nStr := strconv.Itoa(n)
	digits := make([]int, 0)

	for i := len(nStr) - 1; i >= 0; i -= 1 {
		digit, _ := strconv.Atoi(string(nStr[i]))
		digits = append(digits, digit)
	}
  return digits
}


func main() {
	fmt.Println(Digitize(35231))
}