// function Ship(draft, crew) {
//   this.draft = draft;
//   this.crew = crew;
// }

// Ship.prototype.isWorthIt = function () {
//   return this.draft - 1.5 * this.crew > 20;
// };

class Ship {
	constructor(draft, crew) {
		this.draft = draft;
		this.crew = crew;
	}

	isWorthIt() {
		return this.draft - 1.5 * this.crew > 20;
	}
}

describe("object oriented ship", () => {
	it("should return a boolean value", () => {
		const newShip = new Ship(15, 10);
		expect(newShip.isWorthIt()).toBe(false);
	});

	it("should return a boolean value", () => {
		const newShip = new Ship(60, 20);
		expect(newShip.isWorthIt()).toBe(true);
	});
});
