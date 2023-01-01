function findNeedle(haystack) {
	const index = haystack.indexOf("needle");
	return `found the needle at position ${index}`;
}

// describe("find needle", () => {
// 	const haystack_1 = [
// 		"3",
// 		"123124234",
// 		undefined,
// 		"needle",
// 		"world",
// 		"hay",
// 		2,
// 		"3",
// 		true,
// 		false,
// 	];
// 	const haystack_2 = [
// 		"283497238987234",
// 		"a dog",
// 		"a cat",
// 		"some random junk",
// 		"a piece of hay",
// 		"needle",
// 		"something somebody lost a while ago",
// 	];
// 	it("should return the index of needle", () => {
// 		expect(findNeedle(haystack_1)).toMatch("found the needle at position 3");
// 		expect(findNeedle(haystack_2)).toMatch("found the needle at position 5");
// 	});
// });
