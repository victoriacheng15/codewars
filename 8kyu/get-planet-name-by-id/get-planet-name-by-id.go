package main

import "fmt"

// func GetPlanetName(ID int) string {
// 	switch ID {
// 		case 1:
// 			return "Mercury"
// 		case 2:
// 			return "Venus"
// 		case 3:
// 			return "Earth"
// 		case 4:
// 			return "Mars"
// 		case 5:
// 			return "Jupiter"
// 		case 6:
// 			return "Saturn"
// 		case 7:
// 			return "Uranus"
// 		case 8:
// 			return "Neptune"
// 		default:
// 			return "Pluto" // ;-)
// 	}
// }

func GetPlanetName(ID int) string {
	result := []string{"Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune","Pluto"}
	return result[ID-1]
}

func main() {
	fmt.Println(GetPlanetName(1))
	fmt.Println(GetPlanetName(3))
}