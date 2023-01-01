function addLength(str) {
	const array = str.split(" ");
	return array.map((word) => `${word} ${word.length}`);
}

// describe("add length", () => {
// 	it("should return an array of string with bane and length", () => {
// 		expect(addLength("apple ban")).toEqual(["apple 5", "ban 3"]);
// 		expect(addLength("you will win")).toEqual(["you 3", "will 4", "win 3"]);
// 	});
// });
