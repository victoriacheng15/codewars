import { describe, it, expect } from "vitest";

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
