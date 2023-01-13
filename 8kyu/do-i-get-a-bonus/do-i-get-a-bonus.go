package main

import (
	"fmt"
	"strconv"
)

// func BonusTime(salary int, bonus bool) string {
//   var total string
// 	if bonus {
// 		total = strconv.Itoa(salary * 10)
// 	} else {
// 		total = strconv.Itoa(salary)
// 	}

// 	return "£" + total
// }

func BonusTime(salary int, bonus bool) string {
  total := strconv.Itoa(salary)

	if bonus {
		total = strconv.Itoa(salary * 10)
	}
	
	return "£" + total
}

func main() {
	fmt.Println(BonusTime(2, true))
	fmt.Println(BonusTime(78, false))
}
