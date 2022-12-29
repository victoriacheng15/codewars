/* 
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
*/

function partlist(arr) {
	const sliced = (array, idx) => [
		array.slice(0, idx).join(" "),
		array.slice(idx).join(" "),
	];
	return arr.map((_, idx) => sliced(arr, idx)).slice(1);
}

describe("part list", () => {
	const arr = ["I", "wish", "I", "hadn't", "come"];
	it(`it should return [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]] when arr = ${arr}`, () => {
		expect(partlist(arr)).toEqual([
			["I", "wish I hadn't come"],
			["I wish", "I hadn't come"],
			["I wish I", "hadn't come"],
			["I wish I hadn't", "come"],
		]);
	});
	const arr1 = ["cdIw", "tzIy", "xDu", "rThG"];
	it(`it should return [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]] when arr = ${arr1}`, () => {
		expect(partlist(arr1)).toEqual([
			["cdIw", "tzIy xDu rThG"],
			["cdIw tzIy", "xDu rThG"],
			["cdIw tzIy xDu", "rThG"],
		]);
	});
});
