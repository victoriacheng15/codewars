package main

import (
	"fmt"
	"strings"
)

// func AbbrevName(name string) string{
//   names := strings.Split(name, " ")
// 	first := names[0]
// 	last := names[1]
//   return fmt.Sprintf("%s.%s", strings.ToUpper(first[0:1]), strings.ToUpper(last[0:1]))
// }

// alternative
func AbbrevName(name string) string{
  names := strings.Split(name, " ")
	first := names[0]
	last := names[1]
  return strings.ToUpper(string(first[0]) + "." + string(last[0]))
}


func main() {
	fmt.Println(AbbrevName("Sam Harris"))
}