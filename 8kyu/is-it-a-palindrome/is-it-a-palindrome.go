package kata

import "strings"

func IsPalindrome(str string) bool {
	if len(str) < 2{
		return true
	}

	left, right := 0, len(str)-1

	for left < right {
		if strings.ToLower(str)[left] != strings.ToLower(str)[right] {
			return false
		}
		left++
		right--
	}
 return true
}