/* 
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

// function nextId(ids) {
//   let num = 0;
//   while (ids.includes(num)) {
//     num += 1;
//   }
//   return num;
// }

function nextId(ids) {
	const used = new Set(ids);
	for (let i = 0; i <= ids.length; i += 1) {
		if (!used.has(i)) return i;
	}
}

describe("next id", () => {
	it("should return thw lowest next ID", () => {
		expect(nextId([0, 1, 2, 3, 5])).toBe(4);
	});

	it("should return thw lowest next ID, part 2", () => {
		expect(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(11);
	});
});
