package main

import "fmt"

func SumCubes(n int) (result int) {
	for i := 1; i <= n; i++ {
		result += i * i * i
	}

	return result
}

func main() {
	fmt.Println(SumCubes(2)) // 9
	fmt.Println(SumCubes(3)) // 36
}
