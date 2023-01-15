package main

import (
	"fmt"
)

func ExpressionMatter(a int, b int, c int) int {
	arr := []int{a + b + c, a * b * c, a * b + c, a * (b + c), a + b * c, (a + b) * c}
	max :=0

	for _, val := range arr {
		if val > max {
			max = val
		}
	}

	return max
}

func main() {
	fmt.Println(ExpressionMatter(2,1,2))
}