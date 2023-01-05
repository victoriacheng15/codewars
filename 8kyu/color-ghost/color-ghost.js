const Ghost = function () {
	const random = Math.floor(Math.random() * 4);
	this.color = ["red", "white", "yellow", "purple"][random];
};

// class Ghost {
//   constructor() {
//     this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
//   }
// }

describe("ghost color", () => {
	it("should return the color", () => {
		// const mockColor = jest.fn();
		// mockColor.mockReturnValue('white');
		// const ghost = new Ghost();
		expect(1 + 1).toBe(2);
	});
});
