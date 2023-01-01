/* 
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/

function Fighter(name, health, damagePerAttack) {
	this.name = name;
	this.health = health;
	this.damagePerAttack = damagePerAttack;
	this.toString = function () {
		return this.name;
	};
}

function declareWinner(fighter1, fighter2, firstAttacker) {
	const f1 = [fighter1, fighter2].find((f) => f.name === firstAttacker);
	const f2 = [fighter1, fighter2].find((f) => f.name !== firstAttacker);

	const f1Health = Math.ceil(f2.health / f1.damagePerAttack);
	const f2Health = Math.ceil(f1.health / f2.damagePerAttack);

	return f1Health <= f2Health ? f1.name : f2.name;
}

describe("declare the winner", () => {
	const cases = [
		[new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew", "Lew"],
		[new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry", "Harry"],
		[
			new Fighter("Harald", 20, 5),
			new Fighter("Harry", 5, 4),
			"Harry",
			"Harald",
		],
		[
			new Fighter("Harald", 20, 5),
			new Fighter("Harry", 5, 4),
			"Harald",
			"Harald",
		],
		[
			new Fighter("Jerry", 30, 3),
			new Fighter("Harald", 20, 5),
			"Jerry",
			"Harald",
		],
		[
			new Fighter("Jerry", 30, 3),
			new Fighter("Harald", 20, 5),
			"Harald",
			"Harald",
		],
	];

	for (const [fighter1, fighter2, firstAttacker, output] of cases) {
		it(`should return ${output} when fighter1 = ${fighter1}, fighter2 = ${fighter2}, and first attacker is ${firstAttacker}`, () => {
			const input = declareWinner(fighter1, fighter2, firstAttacker);
			expect(input).toBe(output);
		});
	}
});
