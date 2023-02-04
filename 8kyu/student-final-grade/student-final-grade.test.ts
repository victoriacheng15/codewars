import { describe, expect, it } from "vitest";

export function finalGrade (exam: number, projects: number): number {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75;
  return 0;
}

describe("final grade", () => {
	it("should return 100 when exam = 100 and projects = 12", () => {
		expect(finalGrade(100, 12)).toBe(100);
	});

	it("should return 90 when exam = 85 and projects = 5", () => {
		expect(finalGrade(85, 5)).toBe(90);
	});
});
