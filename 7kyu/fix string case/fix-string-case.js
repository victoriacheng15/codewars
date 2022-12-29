/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!
*/

/*
PREP:
- find lower case count
- find upper case count
- if lower case count is greater or equal to upper case count
- true, return lower case
- false, return upper case
*/

function solve(s) {
	function counter(forLower) {
		return forLower
			? (char) => char === char.toLowerCase()
			: (char) => char === char.toUpperCase();
	}
	const lowerCount = [...s].filter(counter(true)).length;
	const upperCount = [...s].filter(counter()).length;
	return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase();
}
