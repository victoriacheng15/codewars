/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

/*
steps:
- split sentence
- set up output array
- check string length
- if 1, change to ASCII code and push to output
- if more than 1, change first letter to ASCII, swap 2nd letter with last letter
*/

const encryptThis = function (text) {
	const sentenceToWord = text.split(" ");
	const output = [];
	sentenceToWord.forEach((str) => {
		if (str.length === 1) {
			output.push(str.charCodeAt(0));
		} else {
			const tempWord = str.split("");
			tempWord[0] = str.charCodeAt(0);
			tempWord[1] = str[str.length - 1];
			tempWord[str.length - 1] = str[1];
			output.push(tempWord.join(""));
		}
	});
	return output.join(" ");
};
