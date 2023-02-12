package main

import "math"

func Litres(time float64) int {
  return int(math.Floor(time / 2))
}
