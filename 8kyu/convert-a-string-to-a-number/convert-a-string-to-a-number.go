package main

import (
	"fmt"
	"strconv"
)


func StringToNumber(str string) int {
	num, _ := strconv.Atoi(str)
	return num
}

func main() {
	fmt.Println(StringToNumber("1234"))
}