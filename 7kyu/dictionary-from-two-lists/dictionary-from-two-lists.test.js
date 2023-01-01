/* 
There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.

Example 1:

keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
Example 2:

keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
*/

// function createDict(keys, values) {
//   const dictionary = {};
//   keys.forEach((key, index) => {
//     dictionary[key] = values[index] !== undefined ? values[index] : null;
//   });
//   return dictionary;
// }

function createDict(keys, values) {
	return keys.reduce((dictionary, key, index) => {
		const dict = dictionary;
		const currValue = values[index];
		dict[key] = currValue !== undefined ? currValue : null;
		return dict;
	}, {});
}

describe("create Dict", () => {
	it("should return the dictionary", () => {
		expect(createDict(["a", "b", "c"], [1, 2, 3])).toEqual({
			a: 1,
			b: 2,
			c: 3,
		});
	});

	it("should return the dictionary", () => {
		expect(createDict(["a", "b", "c", "d"], [1, 2, 3])).toEqual({
			a: 1,
			b: 2,
			c: 3,
			d: null,
		});
	});
});
