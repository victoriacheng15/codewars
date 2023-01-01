/* 
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

function move(position, roll) {
	return position + roll * 2;
}

describe("terminal game move", () => {
	it("should return 8 when position is 0 and roll is 4", () => {
		expect(move(0, 4)).toBe(8);
	});

	it("should return 15 when position is 3 and roll is 6", () => {
		expect(move(3, 6)).toBe(15);
	});

	it("should return 12 when position is 2 and roll is 5", () => {
		expect(move(2, 5)).toBe(12);
	});
});
