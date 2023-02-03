package main

import (
	"fmt"
	"sort"
	"strings"
)

// func TwoSort(arr []string) string {
// 	sort.Strings(arr)
// 	result := ""

// 	for index, char := range arr[0] {
// 		result += string(char)

// 		if index < len(arr[0])-1 {
// 			result += "***"
// 		}
// 	}

// 	return result
// }

func TwoSort(arr []string) string {
	sort.Strings(arr)
	chars := strings.Split(arr[0], "")
	return strings.Join(chars, "***")
}

func main() {
	fmt.Println(TwoSort([]string{"i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"}))
}
