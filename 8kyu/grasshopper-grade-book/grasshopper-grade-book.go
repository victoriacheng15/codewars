package main

import "fmt"

func GetGrade(a,b,c int) rune {
	grades := []int{a,b,c}

	switch avg := (grades[0] + grades[1] + grades[2]) / 3; {
		case avg < 60: 
    return 'F'
    case avg < 70: 
    return 'D'
    case avg < 80: 
    return 'C'
    case avg < 90: 
    return 'B'
    default: 
    return 'A'
	}
}

func main() {
	fmt.Println(GetGrade(95,90,93))
}