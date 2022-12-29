/* 
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b' 
*/

/* 
PREP
p - strings and array
r - a letter
e - "zbk" and [0,1] => 'b
p
- split letters
- loop through the coords and remove the letter array
- join the letter array
*/

function lastSurvivor(letters, coords) {
	const array = [...letters];
	for (let i = 0; i < coords.length; i += 1) {
		array.splice(coords[i], 1);
	}
	return array.join("");
}

describe("last survivor", () => {
	it("should return last latter", () => {
		expect(lastSurvivor("zbk", [2, 1])).toBe("z");
	});

	it("should return last latter", () => {
		expect(lastSurvivor("kbc", [0, 1])).toBe("b");
	});

	it("should return last latter", () => {
		expect(lastSurvivor("c", [])).toBe("c");
	});
});
