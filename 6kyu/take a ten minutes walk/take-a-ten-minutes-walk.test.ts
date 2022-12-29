/* 
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

/* 
check this link for how to set type for return an object with reduce function
https://bobbyhadz.com/blog/typescript-reduce-type
*/

export function isValidWalk(walk: string[]): boolean {
	type Dir = Record<string, number>;

	if (walk.length !== 10) return false;
	const dir = walk.reduce<Dir>((acc, direction) => {
		acc[direction] = (acc[direction] || 0) + 1;
		return acc;
	}, {});

	return dir.n === dir.s && dir.e === dir.w;
}

describe("is valid walk", () => {
	const cases: [string[], boolean][] = [
		[["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"], true],
		[["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"], false],
		[["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"], false],
		[["w"], false],
	];

	for (const [walk, output] of cases) {
		it(`should return ${output} when walk = [${walk}]`, () => {
			expect(isValidWalk(walk)).toBe(output);
		});
	}
});
