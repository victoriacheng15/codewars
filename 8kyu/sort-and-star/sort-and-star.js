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
