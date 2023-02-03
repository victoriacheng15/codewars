import { describe, expect, it } from "vitest";

function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
	return name === "Santa Claus" && password === "Ho Ho Ho!";
};

describe("sleigh authentication", () => {
	const sleigh = new Sleigh();
	it("should return a boolean value", () => {
		expect(sleigh.authenticate("Santa Claus", "Ho Ho Ho!")).toBe(true);
	});

	it("should return a boolean value", () => {
		expect(sleigh.authenticate("Santa", "Ho Ho Ho!")).toBe(false);
	});
});
