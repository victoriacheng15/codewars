/*
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]

note:
repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
*/

function towerBuilder(nFloors) {
	// build here
	let space;
	let star;
	const tower = [];
	for (let i = 1; i <= nFloors; i += 1) {
		space = " ".repeat(nFloors - i);
		star = "*".repeat(2 * i - 1);
		tower.push(`${space}${star}${space}`);
	}
	return tower;
}
