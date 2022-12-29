/* 
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
*/

String.prototype.toAlternatingCase = function () {
  let str = ''

  for(const char of this) {
    if(char === char.toUpperCase()) {
      str += char.toLowerCase()
    } else {
      str += char.toUpperCase()
    }
  }

  return str
}

describe('alternating case', () => {
  const cases = [
    ['hello world', 'HELLO WORLD'],
    ['hello WORLD', 'HELLO world'],
    ['12345', '12345'],
    ['1a2b3c4d5e', '1A2B3C4D5E'],
  ]

  for(const [input, output] of cases) {
    it(`should return ${output} when input is ${input}`, () => {
      expect(input.toAlternatingCase()).toBe(output)
    })
  }
})