/* 
You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

If there are no numbers, which include the digit, return [0,0,0].

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

// function numbersWithDigitInside(x, d) {
//   const arr = [];
//   for (let i = 1; i <= x; i += 1) {
//     const regex = new RegExp(d);
//     if (regex.test(`${i}`)) arr.push(i);
//   }
//   const sum = arr.reduce((a, b) => a + +b, 0);
//   const product = arr.length ? arr.reduce((a, b) => a * +b, 1) : 0;
//   return [arr.length, sum, product];
// }

function numbersWithDigitInside(x, d) {
	const arr = [];
	const nums = [...new Array(x + 1).keys()].slice(1).map(String);
	for (const num of nums) {
		const regex = new RegExp(d);
		if (regex.test(num)) arr.push(num);
	}
	const sum = arr.reduce((a, b) => a + +b, 0);
	const product = arr.length ? arr.reduce((a, b) => a * +b, 1) : 0;
	return [arr.length, sum, product];
}

describe(" numbers with digits inside", () => {
	it("should return [1, 6, 6] when x = 7 and d = 6", () => {
		expect(numbersWithDigitInside(7, 6)).toEqual([1, 6, 6]);
	});

	it("should return [2, 30, 200] when x = 20 and d = 0", () => {
		expect(numbersWithDigitInside(20, 0)).toEqual([2, 30, 200]);
	});

	it("should return [3, 22, 110] when x = 11 and d = 1", () => {
		expect(numbersWithDigitInside(11, 1)).toEqual([3, 22, 110]);
	});
});
