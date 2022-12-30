package main

import (
	"fmt"
)

func RepeatStr(repetitions int, value string) string {
	repeated := ""
	for i := 0; i < repetitions; i += 1 {
		repeated += value
	}
	return repeated
}

func main() {
	fmt.Println(RepeatStr(4, "a"))
	fmt.Println(RepeatStr(3, "hello"))
	fmt.Println(RepeatStr(2, "abc"))
}
