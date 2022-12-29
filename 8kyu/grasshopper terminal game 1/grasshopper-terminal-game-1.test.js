/* 
Terminal Game - Create Hero Prototype
In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0
*/

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
