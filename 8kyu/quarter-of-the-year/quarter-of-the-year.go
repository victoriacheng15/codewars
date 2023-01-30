package main

import (
	"fmt"
	"math"
)

func QuarterOf(month int) int {
	return int(math.Ceil(float64(month) / 3))
}

func main() {
	fmt.Println(float64(8) / 3)
	fmt.Println(QuarterOf(3))
	fmt.Println(QuarterOf(8))
	fmt.Println(QuarterOf(11))
}
