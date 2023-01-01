/* 
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
	const calc = health - damage;
	return calc < 0 ? 0 : calc;
}

describe("terminal game combat", () => {
	it("should return 95 when health is 100 and damage is 5", () => {
		expect(combat(100, 5)).toBe(95);
	});

	it("should return 84 when health is 92 and damage is 8", () => {
		expect(combat(92, 8)).toBe(84);
	});

	it("health cannot go below 0", () => {
		expect(combat(20, 30)).toBe(0);
	});
});
