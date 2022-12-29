/* 
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
*/

/* 
PREP:
- use infexOf to find the index that match 'needle'
- return "found the needle at position" with index
*/

function findNeedle(haystack) {
	const index = haystack.indexOf("needle");
	return `found the needle at position ${index}`;
}

describe("find needle", () => {
	const haystack_1 = [
		"3",
		"123124234",
		undefined,
		"needle",
		"world",
		"hay",
		2,
		"3",
		true,
		false,
	];
	const haystack_2 = [
		"283497238987234",
		"a dog",
		"a cat",
		"some random junk",
		"a piece of hay",
		"needle",
		"something somebody lost a while ago",
	];
	it("should return the index of needle", () => {
		expect(findNeedle(haystack_1)).toMatch("found the needle at position 3");
		expect(findNeedle(haystack_2)).toMatch("found the needle at position 5");
	});
});
