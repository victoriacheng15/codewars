/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

/*
steps:
- split words
- check length, if 0, no reverse, if not 0, reverse them
- join them with space
*/

function reverseWords(str) {
	// Go for it
	return str
		.split(" ")
		.map((word) => word.split("").reverse().join(""))
		.join(" ");
}
