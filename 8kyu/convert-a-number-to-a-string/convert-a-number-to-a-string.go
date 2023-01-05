package main

import (
	"fmt"
	"strconv"
)

func NumberToString(n int) string {
  return strconv.Itoa(n)
}

func main() {
	res := NumberToString(23)
	fmt.Printf("%T, %v", res, res)
}