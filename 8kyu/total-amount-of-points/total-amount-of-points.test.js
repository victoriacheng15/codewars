import { describe, expect, it } from "vitest";

// function points(games) {
//   const arr = games
//     .map((str) => str.split(':'))
//     .map((array) => array.map(Number))
//     .map(([a, b]) => {
//       if (a > b) return 3;
//       if (a < b) return 0;
//       if (a === b) return 1;
//     });
//   return arr.reduce((acc, point) => acc + point, 0);
// }

function points(games) {
	const arr = games.map((str) => str.split(":"));
	return arr.reduce((acc, [a, b]) => {
		if (+a > +b) acc += 3;
		if (+a === +b) acc += 1;
		return acc;
	}, 0);
}

describe("points", () => {
	const arr = [
		"1:0",
		"2:0",
		"3:0",
		"4:0",
		"2:1",
		"1:3",
		"1:4",
		"2:3",
		"2:4",
		"3:4",
	];
	it(`should return 15 for ${arr}`, () => {
		expect(points(arr)).toBe(15);
	});
	const arr2 = [
		"1:0",
		"2:0",
		"3:0",
		"4:4",
		"2:2",
		"3:3",
		"1:4",
		"2:3",
		"2:4",
		"3:4",
	];

	it(`should return 15 for ${arr2}`, () => {
		expect(points(arr2)).toBe(12);
	});
});
