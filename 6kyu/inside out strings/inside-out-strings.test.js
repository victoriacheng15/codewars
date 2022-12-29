/* 
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

function reorderStr(word, start, end) {
	return [...word.slice(start, end)].reverse("").join("");
}

function insideOut(x) {
	const wordsArr = x.split(" ");
	return wordsArr
		.map((word) => {
			const len = word.length;
			let final = word;
			if (len > 3) {
				const middle = Math.floor(len / 2);
				if (len % 2 === 0) {
					final = reorderStr(word, 0, middle) + reorderStr(word, middle, len);
				} else {
					final =
						reorderStr(word, 0, middle) +
						word.slice(middle, middle + 1) +
						reorderStr(word, middle + 1, len);
				}
			}
			return final;
		})
		.join(" ");
}

describe("inside out", () => {
	const cases = [
		["man i need a taxi up to ubud", "man i ende a atix up to budu"],
		[
			"what time are we climbing up the volcano",
			"hwta item are we milcgnib up the lovcona",
		],
		["take me to semynak", "atek me to mesykan"],
	];

	for (const [x, output] of cases) {
		it(`should return ${output} when x = ${x}`, () => {
			const input = insideOut(x);
			expect(input).toBe(output);
		});
	}
});
