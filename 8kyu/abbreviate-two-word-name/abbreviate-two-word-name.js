function abbrevName(name) {
	const upperCase = (word) => word[0][0].toUpperCase();
	return name.split(" ").map(upperCase).join(".");
}

// describe("abbrev name", () => {
// 	it("should return abbrev name, e.g. P.F", () => {
// 		expect(abbrevName("Sam Harris")).toEqual("S.H");
// 		expect(abbrevName("patrick feeney")).toEqual("P.F");
// 	});
// });
