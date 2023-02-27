import { describe, expect, it } from "vitest";

export function solve(s: string) {
 const lowerRegex = /[a-z]/g
 function filteredCase(arr: string[]) {
  return arr.filter(char => char.match(lowerRegex)).length
 }

 const lowerCount = filteredCase([...s])
 const upperCount = s.length - lowerCount

 return lowerCount >= upperCount ? s.toLowerCase(): s.toUpperCase()
}

describe("fix-string-case", () => {
	const tests = [
		["coDe", "code"],
		["CODe", "CODE"],
		["coDE", "code"],
	]

	for(const [s, expected] of tests) {
		it(`${s} -> ${expected}`, () => {
			expect(solve(s)).toBe(expected);
		});
	}
})

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.