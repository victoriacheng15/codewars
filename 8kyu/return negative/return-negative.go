package main

import (
	"fmt"
	"math"
)

func MakeNegative(x int) int {
	var num float64 = float64(x)
	var result int = int(math.Abs(num))
	return -result
}

func main() {
	fmt.Println(MakeNegative(-5))
}
