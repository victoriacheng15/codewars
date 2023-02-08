package main

import (
	"fmt"
	"math"
)

func SqRt(num int) float64 {
	return  math.Sqrt(float64(num))
}

func SquareOrSquareRoot(arr []int) (result []int){
	for _,num := range arr {
		sqrt := SqRt(num)
		
		if sqrt == math.Trunc(sqrt) {
			result = append(result, int(sqrt))
		} else {
			result = append(result, num * num)
		}
	}

	return result
}

func main() {
	fmt.Println(SquareOrSquareRoot([]int{4, 3, 9, 7, 2, 1}))
}
