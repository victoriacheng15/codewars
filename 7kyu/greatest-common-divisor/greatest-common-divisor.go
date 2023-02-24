package main

func Gcd(x, y uint32) uint32 {
	if y == 0 {
		return x
	}

	return Gcd(y, x%y)
}

// func Gcd(x, y uint32) uint32 {
// 	for y != 0 {
// 		x, y = y, x%y
// 	}

// 	return y
// }
