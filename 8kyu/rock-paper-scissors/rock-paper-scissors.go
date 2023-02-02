package main

import "fmt"

func Rps(p1, p2 string) string {
	beats := map[string]string{
		"rock":     "scissors",
		"scissors": "paper",
		"paper":    "rock",
	}

	if beats[p1] == p2 {
		return "Player 1 won!"
	}

	if beats[p2] == p1 {
		return "Player 2 won!"
	}

	return "Draw!"
}

func main() {
	fmt.Println(Rps("rock", "paper"))
}
