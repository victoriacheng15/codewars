/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

/*
PREP:
- use reduce() method
- check the item is array or not
- if yes, add item with spread operator to acc
- if not, add the item as an item
- sort the array
*/

function flattenAndSort(array) {
	const flatten = array.reduce((acc, item) => {
		const isArray = Array.isArray(item);
		return isArray ? [...acc, ...item] : [...acc, item];
	}, []);
	return flatten.sort((a, b) => a - b);
}
