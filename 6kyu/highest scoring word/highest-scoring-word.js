/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Example:
high('man i need a taxi up to ubud'), 'taxi'
high('d bb'), 'd'
*/

/*
PREPS:
- get each letter's ASCII code and minus 96
- calculate word score based on these letters
- get word score
- map each word score in the sentence
- find the max score
- find the index of the max score
- return the word with max score
*/

function high(x) {
	const wordArr = x.split(" ");
	const getCharCode = (char) => char.charCodeAt() - 96;
	const calcWordScore = (acc, total) => acc + total;

	const getWordScore = (word) =>
		[...word].map(getCharCode).reduce(calcWordScore, 0);

	const getScore = wordArr.map(getWordScore);
	const getMax = Math.max.apply(null, getScore);
	const getMaxIndex = getScore.findIndex((el) => el === getMax);
	return wordArr[getMaxIndex];
}
