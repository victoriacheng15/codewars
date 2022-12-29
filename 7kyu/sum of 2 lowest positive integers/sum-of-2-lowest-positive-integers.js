/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

/*
PREP:
array contains minimum of 4 postive integers
- find 2 lowest positive numbers
- sort them in the order
- get first 2 numbers
- add them

note:
compare function with sort:
if a > b => sort b before a
if a < b => sort a before b
if === 0 => keep the original order

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

function sumTwoSmallestNumbers(numbers) {
	const sortedArr = numbers.sort((a, b) => (a < b ? -1 : 1));
	return sortedArr[0] + sortedArr[1];
}
