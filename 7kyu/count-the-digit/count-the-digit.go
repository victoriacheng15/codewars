package main

import (
	"fmt"
)

func NbDig(n int, d int) int {
	count := 0
	for i := 0; i <= n; i++ {
		square := i * i
		if i == 0 && square%10 == d {
			count++
		}

		for square > 0 {
			if square%10 == d {
				count++
			}
			square /= 10
		}
	}
	return count
}

func main() {
	fmt.Println(NbDig(550, 5))  // 213
	fmt.Println(NbDig(5750, 0)) // 4700
}
