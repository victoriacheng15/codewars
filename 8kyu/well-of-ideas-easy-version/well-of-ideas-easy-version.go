package main

func Well(x []string) string {
	ideas := 0
	for _, idea := range x {
		if idea == "good" {
			ideas += 1
		}
	}

	if ideas > 2 {
		return "I smell a series!"
	}

	if ideas >= 1 && ideas<=2 {
		return "Publish!"
	}

	return "Fail!"
}