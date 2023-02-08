package main

import (
	"fmt"
	"strconv"
	"strings"
)

func Points(games []string) (result int) {
	for _, match := range games {
		scores := strings.Split(match, ":")
		a, _ := strconv.Atoi(scores[0])
		b, _ := strconv.Atoi(scores[1])

		if a > b {
			result += 3
		}

		if a == b {
			result += 1
		}
	}

	return result
}

func main() {
	fmt.Println(Points([]string{"1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"}))
}
