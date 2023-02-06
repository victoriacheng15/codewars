package main

import "fmt"


func PositiveSum(numbers []int) (result int) {	
	for _,num  := range numbers {
		if num > 0 {
			result += num
		}
	}

	return result
}


func main() {
	fmt.Println(PositiveSum([]int{1, 2, 3, 4, 5}))
	fmt.Println(PositiveSum([]int{-1, 2, 3, 4, -5}))

}