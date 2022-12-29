/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

export const likes = (a: string[]): string => {
	interface ResultObj {
		[key: number]: string;
	}

	const result: ResultObj = {
		0: "no one likes this",
		1: `${a[0]} likes this`,
		2: `${a[0]} and ${a[1]} like this`,
		3: `${a[0]}, ${a[1]} and ${a[2]} like this`,
		4: `${a[0]}, ${a[1]} and ${a.length - 2} others like this`,
	};

	return result[Math.min(4, a.length)];
};

describe("who likes it", () => {
	// could write either
	// [Array<string>, string][]
	// or
	// Array<[Array<string>, string]>
	const cases: [string[], string][] = [
		[[], "no one likes this"],
		[["Peter"], "Peter likes this"],
		[["Jacob", "Alex"], "Jacob and Alex like this"],
		[["Max", "John", "Mark"], "Max, John and Mark like this"],
		[["Alex", "Jacob", "Mark", "Max"], "Alex, Jacob and 2 others like this"],
	];

	for (const [a, output] of cases) {
		it(`should return ${output} when a = [${a}]`, () => {
			const input = likes(a);
			expect(input).toBe(output);
		});
	}
});
