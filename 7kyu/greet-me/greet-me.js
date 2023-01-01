/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

/*
PREP:
- first letter of the name needs to be captilize
- rest of letters need to be in lower case
- use name[0] to convert first letter to upper case
- name.slice(1) for convert rest of letters to lower case
*/

const greet = function (name) {
	const fixedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	return `Hello ${fixedName}!`;
};
