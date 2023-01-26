import { describe, it, expect } from "vitest";

// function setAlarm(employed, vacation) {
//   if (employed === true && vacation === false) return true;
//   return false;
// }

// or
function setAlarm(employed, vacation) {
	return employed && !vacation;
}

describe("setAlarm", () => {
	it("should return true", () => {
		expect(setAlarm(true, false)).toBeTruthy();
		// expect(setAlarm(true, false)).toEqual('');
	});

	it("should return false", () => {
		expect(setAlarm(false, true)).toBeFalsy();
		expect(setAlarm(true, true)).toBeFalsy();
	});
});
