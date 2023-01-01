/* 
Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
*/
// Add rooms here
const rooms = {
	room1: {
		name: "room1",
		description: "This is the first room.",
		completed: true,
	},
	room2: {
		name: "room2",
		description: "This is the second room.",
		completed: true,
	},
	room3: {
		name: "room3",
		description: "This is the third room.",
		completed: true,
	},
};

describe("escape the room", () => {
	const keys = Object.keys(rooms);
	it("should have object type", () => {
		keys.forEach((name) => {
			expect(typeof rooms[name]).toBe("object");
		});
	});
});
