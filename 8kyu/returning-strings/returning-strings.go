package main

import "fmt"

func Greet(name string) string {
	// return "Hello, " + name + " how are you today?"
	return fmt.Sprintf("Hello, %s how are you today?", name)
}

func main() {
	fmt.Println(Greet("Ryan"))
}
