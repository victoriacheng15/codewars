package main

import (
	"fmt"
)

// func countSheep(num int) string {
//   res := ""
// 	for i := 1; i <= num; i++ {
// 		if i == 0 {
// 			return res
// 		}
// 		res += strconv.Itoa(i) + " sheep..."
// 	}

// 	return res
// }

func countSheep(num int) string {
  if num > 0 {
		return countSheep(num - 1) + fmt.Sprintf("%d sheep...", num)
	}

	return ""
}

func main() {
	fmt.Println(countSheep(0))
	fmt.Println(countSheep(1))
	fmt.Println(countSheep(3))
}