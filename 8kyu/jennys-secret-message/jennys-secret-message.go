package main

import "fmt"

func Greet(name string) string {
  if name == "Johnny" {
		return "Hello, my love!"
	}

	// return "Hello, " + name + "!"
	return fmt.Sprintf("Hello, %v!", name)
}

func main() {
	fmt.Println(Greet("Johnny"))
	fmt.Println(Greet("Viktor"))
}