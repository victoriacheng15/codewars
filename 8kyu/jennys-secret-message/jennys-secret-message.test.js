/* 
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
*/

function greet(name) {
	return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}

describe("greet", () => {
	it("should return the name", () => {
		expect(greet("Jim")).toBe("Hello, Jim!");
	});

	it("should return the lover", () => {
		expect(greet("Johnny")).toBe("Hello, my love!");
	});
});
