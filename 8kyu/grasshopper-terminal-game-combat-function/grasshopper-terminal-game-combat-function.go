package main

import (
	"fmt"
)

func combat(health, damage float64) float64 {
	res := health - damage
	if res < 0 {
		res = 0
	}
	
	return res
}

func main() {
	fmt.Println(combat(100.0, 50.0))
}