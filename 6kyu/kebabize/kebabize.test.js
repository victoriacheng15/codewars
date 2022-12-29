/* 
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(str) {
	const numRegex = /[0-9]/g;
	const regex = /(?=[A-Z])/g;
	return str.replace(numRegex, "").split(regex).join("-").toLowerCase();
}

describe("kebabize", () => {
	const cases = [
		["myCamelCasedString", "my-camel-cased-string"],
		["myCamelHas3Humps", "my-camel-has-humps"],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str}`, () => {
			const input = kebabize(str);
			expect(input).toBe(output);
		});
	}
});
