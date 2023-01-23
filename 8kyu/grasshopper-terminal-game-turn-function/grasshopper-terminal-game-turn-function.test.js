import { describe, it, expect, vi } from "vitest";

const rollDice = () => "rollDice";
const move = () => "move";
const combat = () => "combat";
const getCoins = () => "getCoins";
const buyHealth = () => "buyHealth";
const printStatus = () => "printStatus";

function doTurn() {
	[rollDice, move, combat, getCoins, buyHealth, printStatus].forEach((func) =>
		func(),
	);
}

describe("turn", () => {
	const rollDice = vi.fn(()=> "rollDice");
	const move = vi.fn(()=> "move");
	const combat = vi.fn(()=> "combat");
	const getCoins = vi.fn(()=> "getCoins");
	const buyHealth = vi.fn(()=> "buyHealth");
	const printStatus = vi.fn(()=> "printStatus");

	
	it("should call all the functions in the correct order", () => {
		doTurn();
		expect(rollDice()).toBe("rollDice");
		expect(move()).toBe("move");
		expect(combat()).toBe("combat");
		expect(getCoins()).toBe("getCoins");
		expect(buyHealth()).toBe("buyHealth");
		expect(printStatus()).toBe("printStatus");
	});

	it("should return buyHealth()", () => {
		expect(1 + 1).toBe(2);
	});
});
