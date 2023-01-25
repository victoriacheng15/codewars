package main

import (
	"fmt"
)

func IsDivisible(n, x, y int) bool {
	return n%x == 0 && n%y == 0
}

func main() {
	fmt.Println(IsDivisible(2, 3, 5))
}