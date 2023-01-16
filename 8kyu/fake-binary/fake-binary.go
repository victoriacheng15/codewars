package main

import (
	"fmt"
)

// in golang, if you only do num without using strconv, the number will print ASCII code for the number 4 (52).

// func FakeBin(x string) string {
// 	res := ""
// 	for _, num := range x {
// 		val, _ := strconv.Atoi(string(num))
// 		// fmt.Println(val, num)
// 		if val < 5 {
// 			res += "0"
// 		} else {
// 			res += "1"
// 		}
// 	}
// 	return res
// }

// or another way, instead of using strconv, compare character directly and make sure it is single qoute instead of double qoute.

func FakeBin(x string) (res string) {
	for _, char := range x {
		if char < '5' {
			res += "0"
		} else {
			res += "1"
		}
	}

	return res
}


func main() {
	fmt.Println(FakeBin("45385593107843568")) //01011110001100111
}