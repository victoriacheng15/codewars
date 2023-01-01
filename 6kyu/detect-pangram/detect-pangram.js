/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

/*
PREPs:
- set regex to filter out non-words
- replace non-word with space
- change to lower cases
- convert to str to array
- use Set() to take letter once
- check alphabeta (26) length
*/

function isPangram(string) {
	const regex = /[\W\d]/g;
	const str = [...string.replace(regex, " ").toLowerCase().split(" ").join("")];
	return [...new Set(str)].length === 26;
}
