package main

import "fmt"

func SmallestIntegerFinder(numbers []int) int {
	min_num := numbers[0]

	for _, num := range numbers {
		if num < min_num {
			min_num = num
		}
	}

	// for i := 0; i < len(numbers); i++ {
	// 	if numbers[i] < min_num {
	// 		min_num = numbers[i]
	// 	}
	// }

	return min_num
}

func main() {
	fmt.Println(SmallestIntegerFinder([]int{34, 15, 88, 2}))
}
