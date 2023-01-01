/* 
Implement a function that normalizes out of range sequence indexes (converts them to 'in range' indexes) by making them repeatedly 'loop' around the array. The function should then return the value at that index. Indexes that are not out of range should be handled normally and indexes to empty sequences should return undefined/None depending on the language.

For positive numbers that are out of range, they loop around starting at the beginning, so

normIndex(arr, arr.length);     //Returns first element
normIndex(arr, arr.length + 1); //Returns second element
normIndex(arr, arr.length + 2); //Returns third element
//And so on...
normIndex(arr, arr.length * 2); //Returns first element
For negative numbers, they loop starting from the end, so

normIndex(arr, -1);    //Returns last element
normIndex(arr, -2);    //Returns second to last element
normIndex(arr, -3);    //Returns third to last element
//And so on...
normIndex(arr, -arr.length); //Returns first element
*/

function normIndex(array, index) {
	const len = array.length;
	const getIndex = index % len;
	return array[index < 0 ? (len + getIndex) % len : getIndex];
}

describe("normalize indexes", () => {
	const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	it("should return first element", () => {
		expect(normIndex(array, array.length)).toBe(0);
	});

	it("should return second element", () => {
		expect(normIndex(array, array.length + 1)).toBe(1);
	});

	it("should return last element", () => {
		expect(normIndex(array, -1)).toBe(9);
	});

	it("should return last second element", () => {
		expect(normIndex(array, -2)).toBe(8);
	});

	it("should return a random element", () => {
		expect(normIndex(array, -35)).toBe(5);
	});

	it("should return a random element", () => {
		const array1 = [10, 12, 84, 60, 82, 78, 61, 87, 71, 7, 17];
		expect(normIndex(array1, -11)).toBe(10);
	});
});
