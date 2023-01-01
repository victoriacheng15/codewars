/* 
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
*/

function combine(...inputs) {
	const argsArray = [...inputs];
	const comboObj = {};
	argsArray.forEach((obj) => {
		for (const key in obj) {
			comboObj[key] ? (comboObj[key] += obj[key]) : (comboObj[key] = obj[key]);
		}
	});
	return comboObj;
}

describe("combine", () => {
	it("should return obj with total counts", () => {
		const objA = { a: 10, b: 20, c: 30 };
		const objB = { a: 3, c: 6, d: 3 };
		expect(combine(objA, objB)).toEqual({ a: 13, b: 20, c: 36, d: 3 });
	});

	it("should return obj with total counts", () => {
		const objA = { a: 10, b: 20, c: 30 };
		const objB = { a: 3, c: 6, d: 3 };
		const objC = { a: 5, d: 11, e: 8 };
		expect(combine(objA, objB, objC)).toEqual({
			a: 18,
			b: 20,
			c: 36,
			d: 14,
			e: 8,
		});
	});
});
