package main

import "fmt"

func LoveFunc(flower1, flower2 int) bool {
	return flower1%2 != flower2%2
}

func main() {
	fmt.Println(LoveFunc(1, 4))
}
