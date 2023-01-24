package main

import "fmt"

// func HowMuchILoveYou(i int) string {
// 	arr := [...]string{"I love you", "a little", "a lot", "passionately", "madly", "not at all"}
//   return arr[(i - 1) % 6]
// }

func HowMuchILoveYou(i int) string {
	d := 6
	var arr = map[int]string{
		1: "I love you",
		2: "a little",
		3: "a lot",
		4: "passionately",
		5: "madly",
		0: "not at all",
	}
	return arr[i % d]
}

func main() {
	fmt.Println(HowMuchILoveYou(7))
	fmt.Println(HowMuchILoveYou(3))
	fmt.Println(HowMuchILoveYou(6))
}