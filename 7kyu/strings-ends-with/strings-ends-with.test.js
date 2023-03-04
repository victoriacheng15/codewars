import {describe, expect, it} from "vitest";

function solution(str, ending) {
	return ending.length === 0 ? true : str.slice(-ending.length) === ending;
}

console.log(solution("abc", "bc"));


describe("strings-ends-with", () => {
  const tests = [
    ["abc", "c", true],
    ["abcde", "cde", true],
    ["abcde", "abc", false],
    ["abc", "b", false],
    ["abc", "", true],
  ]

  for(const [str, ending, expected] of tests) {
    it(`should return ${expected} for ${str} with ${ending}`, () => {
      expect(solution(str, ending)).toBe(expected);
    });
  }
})