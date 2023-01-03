package main

import (
	"fmt"
	"strconv"
)

func BinToDec(bin string) int {
	num, err := strconv.ParseInt(bin, 2, 64)
	if err != nil {
		return 0
	}

	return int(num)
}

func main() {
	fmt.Println((BinToDec("0")))
	fmt.Println((BinToDec("10")))
	fmt.Println((BinToDec("1001001")))
	fmt.Println((BinToDec("11")))
}