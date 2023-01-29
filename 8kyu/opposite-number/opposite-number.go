package main

import "fmt"

func Opposite(value int) int {
	return value * -1
}

func main() {
	fmt.Println(Opposite(1))
}
