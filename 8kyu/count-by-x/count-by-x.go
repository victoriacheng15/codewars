package main

import "fmt"

func CountBy(x, n int) []int {
  res := make([]int, 0)

	for i := 1; i <= n; i += 1 {
		res = append(res, x * i)
	}

	return res
}


func main() {
	fmt.Println(CountBy(1,5))
	fmt.Println(CountBy(2,5))
}