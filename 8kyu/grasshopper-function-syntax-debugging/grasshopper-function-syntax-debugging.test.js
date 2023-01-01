/* 
Grasshopper - Function syntax debugging
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
*/

function main(verb, noun) {
	return verb + noun;
}

describe("check function syntax", () => {
	it("should return string value", () => {
		expect(main("take ", "item")).toBe("take item");
	});
});
