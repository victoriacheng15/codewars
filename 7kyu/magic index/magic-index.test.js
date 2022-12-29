/* 
A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

findMagic([-20,-10,2,10,20]); // Returns 2
*/

/* 
input array
- set first sign to decide postive or negative
- loop throug the array
  - if the element's sign doesnt equal to the first sign
  - return the index
- if none, return -1
output integer (postive or negative)
*/

function findMagic(arr) {
	const firstSign = Math.sign(arr[0]);
	for (let i = 1; i < arr.length; i += 1) {
		const current = arr[i];
		if (firstSign !== Math.sign(current)) {
			return i;
		}
	}
	return -1;
}

describe("magic index", () => {
	it("should return index of positive int", () => {
		expect(findMagic([-20, -10, 2, 10, 20])).toBe(2);
	});

	it("should return index of negative int", () => {
		expect(findMagic([6, 5, 83, 5, 3, 18])).toBe(-1);
	});
});
