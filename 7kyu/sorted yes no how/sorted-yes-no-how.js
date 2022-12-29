/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

/*
PREP:
- copy the original array and then sort
- use JSON.stringify() to convert array to string
- check which one are they, ascending or descending

note:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/sorted-yes-no-how
*/

function isSortedAndHow(array) {
	const sorted = array.slice().sort((a, b) => a - b);
	const jsonFormat = (arr) => JSON.stringify(arr);

	if (jsonFormat(sorted) === jsonFormat(array)) {
		return "yes, ascending";
	}

	if (jsonFormat(sorted.reverse()) === jsonFormat(array)) {
		return "yes, descending";
	}

	return "no";
}
