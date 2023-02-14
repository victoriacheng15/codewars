package main

func Maps(x []int) (result []int) {
	for _, num := range x {
		result = append(result, num * 2)
	}

	return result
}