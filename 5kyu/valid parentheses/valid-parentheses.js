/* 
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

/* 
PREP:
- set regex to detect '()'
- use while...loop  
- use test(parens) to evaluate the condition
- if true, replace '()' with ''
- until parens equal to empty string
- evalute if parens equal to empty string or not

note:
the order of while loop
(())((()())())
()(())
()
*/

function validParentheses(parens) {
	const regex = /\(\)/g;
	while (regex.test(parens)) {
		parens = parens.replace(regex, "");
	}
	return parens === "";
}
console.log(validParentheses(")(()))"));
