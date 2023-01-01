/* 
Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5
*/

function sortByValueAndIndex(array) {
	const setArray = (elem, i) => [elem, elem * (i + 1)];
	const sorted = (a, b) => a[1] - b[1];
	const newOrder = (arr) => arr[0];
	return array.map(setArray).sort(sorted).map(newOrder);
}

describe(" sort by value and index", () => {
	it("should return [2, 3, 4, 23, 5] for [23, 2, 3, 4, 5]", () => {
		expect(sortByValueAndIndex([23, 2, 3, 4, 5])).toEqual([2, 3, 4, 23, 5]);
	});

	it("should return [2, 3, 4, 5, 26 ] for [26, 2, 3, 4, 5]", () => {
		expect(sortByValueAndIndex([26, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 26]);
	});
});
