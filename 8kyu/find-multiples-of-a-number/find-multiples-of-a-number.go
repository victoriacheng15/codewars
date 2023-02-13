package main

func FindMultiples(integer, limit int) []int {
  result := []int{}
	for i := 1; i <= limit; i ++ {
		if i % integer == 0 {
			result = append(result, i)
		}
	}

	return result
}
