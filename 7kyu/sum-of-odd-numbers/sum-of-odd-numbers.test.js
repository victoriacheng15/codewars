/* 
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
	return n ** 3;
}

describe("sum of odd numbers", () => {
	const cases = [
		[1, 1],
		[42, 74088],
	];
	for (const [input, output] of cases) {
		it(`should return ${output} when input is %{input}`, () => {
			expect(rowSumOddNumbers(input)).toBe(output);
		});
	}
});
