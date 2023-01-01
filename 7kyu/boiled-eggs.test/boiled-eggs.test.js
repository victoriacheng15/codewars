/* 
You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10
*/

function cookingTime(eggs) {
	const calc = eggs / 8;
	return 5 * Math.ceil(calc);
}

describe("boiled eggs", () => {
	it("should return 0 egg when eggs = 0", () => {
		expect(cookingTime(0)).toBe(0);
	});

	it("should return 5 egg when eggs = 5", () => {
		expect(cookingTime(5)).toBe(5);
	});

	it("should return 10 egg when eggs = 10", () => {
		expect(cookingTime(10)).toBe(10);
	});
});
