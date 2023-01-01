/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

// check first letter for R or r
function areYouPlayingBanjo(name) {
	if (name[0] === "R" || name[0] === "r") {
		return `${name} plays banjo`;
	}
	return `${name} does not play banjo`;
}

describe("are you playing banjo?", () => {
	it("should return Rose plays banjo", () => {
		expect(areYouPlayingBanjo("Rose")).toBe("Rose plays banjo");
	});

	it("should return John does not plays banjo", () => {
		expect(areYouPlayingBanjo("John")).toBe("John does not play banjo");
	});
});
