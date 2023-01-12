package main

import (
	"fmt"
)

// func DNAtoRNA(dna string) string {
//   rna := strings.Replace(dna, "T", "U", -1)
// 	return rna
// }

func DNAtoRNA(dna string) string {
	var res string

	for _, letter := range dna {
		if letter == 'T' {
			res += "U"
		}

		res += string(letter)

	}

	return res
}

func main() {
	fmt.Println(DNAtoRNA("GCAT"))
}
