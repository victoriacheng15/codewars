import {describe, expect, it} from "vitest";

export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}

describe("strings-ends-with", () => {
  const tests: [string, string, boolean][] = [
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