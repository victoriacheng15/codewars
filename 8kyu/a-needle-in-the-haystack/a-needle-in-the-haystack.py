def find_needle(haystack):
	for item in haystack:
		if item == "needle":
			return "found the needle at position {}".format(haystack.index(item))


print(find_needle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))