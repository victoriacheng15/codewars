/* 
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

/* 
PREP:
- if empty string, return false
- use trim() and split() to get rid of empty space and then split into array
- use map() to convert first letter of each word to upper case
- join them together
- add hash in front of sentence
- check hashString length
- if above 140, false
- if not return hashString
*/

function generateHashtag(str) {
	if (str.trim() === "") return false;
	const sentence = str.trim().split(" ");
	const generator = sentence
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join("");
	const hashString = `#${generator}`;
	return hashString.length > 140 ? false : hashString;
}
