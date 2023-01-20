package main

import "fmt"

func CheckForFactor(base int, factor int) bool {
	return base % factor == 0
}

func main() {
	fmt.Println(CheckForFactor(10, 2))
	fmt.Println(CheckForFactor(63, 7))
	fmt.Println(CheckForFactor(9, 2))
	fmt.Println(CheckForFactor(653, 7))
}