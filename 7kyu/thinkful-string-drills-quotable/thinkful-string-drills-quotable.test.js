/* 
This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

'[name] said: "[quote]"'
For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string

'Grae said: "Practice makes perfect"'
Unfortunately, something is wrong with the instructions in the function body. Your job is to fix it so the function returns correctly formatted quotes.

Click the "Train" button to get started, and be careful with your quotation marks.
*/

function quotable(name, quote) {
	const formatter = (string) => string[0].toUpperCase() + string.slice(1);
	return `${formatter(name)} said: "${quote}"`;
}

describe("string drill", () => {
	it("should return proper formated sentence", () => {
		expect(quotable("Grace", "Practice makes perfect")).toBe(
			'Grace said: "Practice makes perfect"',
		);
	});

	it("should return proper formated sentence", () => {
		expect(quotable("Alex", "Ruby is great fun")).toBe(
			'Alex said: "Ruby is great fun"',
		);
	});
});
