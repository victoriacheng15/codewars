import { describe, expect, it } from "vitest";

export function twoSort(s: string[]): string {
	const sorted = s.sort()
  const stars = "*".repeat(3)
  return sorted[0].split("").join(stars)
}

describe("twoSort", () => {
	it('should return L***e***t***s when s = ["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]', () => {
		expect(
			twoSort([
				"Lets",
				"all",
				"go",
				"on",
				"holiday",
				"somewhere",
				"very",
				"cold",
			]),
		).toBe("L***e***t***s");
	});

  it('should return c***o***d***e when s = ["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]', () => {
    expect(
      twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]),
    ).toBe("c***o***d***e");
  })
});
