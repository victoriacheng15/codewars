/* 
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

/* 
PREP:
- set up regex for - and _
- get rid of - and _ 
- change first letter to uppercase
- no upper case for the first word
*/

function toCamelCase(str) {
	const regex = /[-_]\w/g;
	return str.replace(regex, (word) => word[1].toUpperCase());
}
