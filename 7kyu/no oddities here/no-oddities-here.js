/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

/*
PREP:
- if only 1 zero, return [0]
- filter out odd numbers
*/

function noOdds(values) {
	const getEven = values.filter((num) => num % 2 === 0);
	return getEven;
}
