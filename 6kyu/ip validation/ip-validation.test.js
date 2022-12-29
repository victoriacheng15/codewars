/* 
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
*/

// const regex =
// /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/g;

function isValidIP(str) {
	const regex =
		/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/g;
	return regex.test(str);
}

describe("IPv4 validation", () => {
	it("should return a boolean value", () => {
		expect(isValidIP("12.255.56.1")).toBe(true);
	});

	it("should return a boolean value", () => {
		// no more than 255
		expect(isValidIP("123.456.789.0")).toBe(false);
	});

	it("should return a boolean value", () => {
		// no negative
		expect(isValidIP("12.34.56.-7")).toBe(false);
	});
});
