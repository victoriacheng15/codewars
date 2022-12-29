/* 
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

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
