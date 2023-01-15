String.prototype.toAlternatingCase = function () {
	let str = "";

	for (const char of this) {
		if (char === char.toUpperCase()) {
			str += char.toLowerCase();
		} else {
			str += char.toUpperCase();
		}
	}

	return str;
};

// describe('alternating case', () => {
//   const cases = [
//     ['hello world', 'HELLO WORLD'],
//     ['hello WORLD', 'HELLO world'],
//     ['12345', '12345'],
//     ['1a2b3c4d5e', '1A2B3C4D5E'],
//   ]

//   for(const [input, output] of cases) {
//     it(`should return ${output} when input is ${input}`, () => {
//       expect(input.toAlternatingCase()).toBe(output)
//     })
//   }
// })
