/* 
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
*/

// function partsSums(ls) {
//   const newArr = [];
//   for (let i = 0; i <= ls.length; i += 1) {
//     const sliced = ls.slice(i, ls.length);
//     const sum = sliced.reduce((acc, curr) => acc + curr, 0);
//     newArr.push(sum);
//   }
//   return newArr;
//   // return { newArr };
// }

function partsSums(ls) {
	const newArr = [0];
	for (const n in ls.reverse()) {
		newArr.push(ls[n] + newArr[n]);
	}
	return newArr.reverse();
	// return { newArr };
}

// function partsSums(ls) {
//   ls.unshift(0);
//   let sum = ls.reduce((acc, curr) => acc + curr, 0);
//   return ls.map((value) => (sum -= value));
// }

describe("sums of parts", () => {
	it("should return [21, 20, 18, 15, 11, 6, 0] for [1, 2, 3, 4, 5, 6]", () => {
		expect(partsSums([1, 2, 3, 4, 5, 6])).toEqual([21, 20, 18, 15, 11, 6, 0]);
	});

	it("should return [20, 20, 19, 16, 10, 0] for [0, 1, 3, 6, 10]", () => {
		expect(partsSums([0, 1, 3, 6, 10])).toEqual([20, 20, 19, 16, 10, 0]);
	});
});
