/* 
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

// input: names - unsorted strings
// output: case-agnostic sort

/* 
more on the sort() order
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

const sortme = function (names) {
	return names.sort((a, b) => {
		a = a.toLowerCase();
		b = b.toLowerCase();
		if (a === b) return 0;
		if (a > b) return 1;
		return -1;
	});
};
