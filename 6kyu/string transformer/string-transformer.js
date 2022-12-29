/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

/*
PREPS:
- split sentence
- map each word and check char for upper or lower cases
- flip them
- reverse and then join
*/

function stringTransformer(str) {
	const splitStr = str.split(" ");
	const isUpperCase = (char) => char === char.toUpperCase();
	const flipCases = (char) =>
		isUpperCase(char) ? char.toLowerCase() : char.toUpperCase();
	const checkEachCahr = (word) => [...word].map(flipCases).join("");
	return splitStr.map(checkEachCahr).reverse().join(" ");
}
