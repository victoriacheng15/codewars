/* 
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

/* 
PREP:
- set regex for (), [], and {}
- use while loop to evalute the conditions
- regex.test(braces)
- replace braces with ''
- if braces === ''
  - if it is empty, mean no braces left
  - if not empty, there are some mismatched braces

Example:
while loop order
[({})](]
[()](]
[](]
(]
*/

function validBraces(braces) {
	// TODO
	const regex = /\(\)|\{\}|\[\]/g;
	while (regex.test(braces)) {
		braces = braces.replace(regex, "");
	}
	return braces === "";
}
