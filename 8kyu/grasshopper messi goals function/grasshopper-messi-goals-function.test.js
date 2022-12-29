/* 
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

function goals(...inputs) {
	return [...inputs].reduce((acc, curr) => acc + curr, 0);
}

describe("goals", () => {
	it("should return the total number of goals", () => {
		expect(goals(5, 10, 2)).toEqual(17);
	});
});
