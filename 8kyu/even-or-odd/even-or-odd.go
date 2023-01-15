package main

import "fmt"

// func EvenOrOdd(number int) string {
//   if number % 2 == 0 {
// 		return "Even"
// 	}

// 	return "Odd"
// }

func EvenOrOdd(number int) string {
  return []string{"Even", "Odd"}[number & 1]
}

func main() {
	fmt.Println(EvenOrOdd(2))
	fmt.Println(EvenOrOdd(5))
}