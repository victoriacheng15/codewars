import { describe, it, expect } from "vitest";

function Hero(name = "Hero") {
	return {
		name,
		position: "00",
		health: 100,
		damage: 5,
		experience: 0,
	};
}

// could write like this
// function Hero (name) {
//   this.name = name || 'Hero';
//   this.position = '00';
//   this.health = 100;
//   this.damage = 5;
//   this.experience = 0;
// }

describe("create hero", () => {
	it("should return newly created Hero", () => {
		const john = new Hero("John");
		expect(john).toEqual({
			name: "John",
			position: "00",
			health: 100,
			damage: 5,
			experience: 0,
		});
	});
});
