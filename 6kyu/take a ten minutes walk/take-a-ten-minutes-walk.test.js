/* 
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

// function isValidWalk(walk) {
//   let [x, y] = [0, 0];
//   walk.forEach((direction) => {
//     if (direction === 'n') x += 1;
//     if (direction === 's') x -= 1;
//     if (direction === 'w') y -= 1;
//     if (direction === 'e') y += 1;
//   });
//   return x === 0 && y === 0 && walk.length === 10;
// }

// function isValidWalk(walk) {
//   const map = {
//     n: 1,
//     s: -1,
//     w: -1,
//     e: 1,
//   };
//   let [x, y] = [0, 0];
//   walk.forEach((direction) => {
//     if (direction === 'n' || direction === 's') x += map[direction];
//     if (direction === 'w' || direction === 'e') y += map[direction];
//   });
//   return x === 0 && y === 0 && walk.length === 10;
// }

// function isValidWalk(walk) {
//   const map = { n: 0, w: 0, s: 0, e: 0 };
//   for (const dir of walk) {
//     map[dir] += 1;
//   }
//   return walk.length === 10 && map.n === map.s && map.w === map.e;
// }

function isValidWalk(walk) {
	const dirCounts = walk.reduce((acc, dir) => {
		acc[dir] = (acc[dir] || 0) + 1;
		return acc;
	}, {});

	return (
		walk.length === 10 &&
		dirCounts.n === dirCounts.s &&
		dirCounts.w === dirCounts.e
	);
}

describe("take a ten minutes walk", () => {
	const cases = [
		[["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"], true],
		[["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"], false],
		[["w"], false],
		[["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"], false],
	];
	for (const [walk, output] of cases) {
		it(`should return ${output} when walk is [${walk}]`, () => {
			const input = isValidWalk(walk);
			expect(input).toBe(output);
		});
	}
});
