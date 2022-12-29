/* 
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

/* 
PREP:
- sort strings based on the order
- return first element of the array
- split first element and then join them with ***
*/

function twoSort(s) {
	const sorted = s.sort();
	return sorted[0].split("").join("***");
}
