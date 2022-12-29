/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// convert to lower case
// use Set() method that store unique values of any type
// check length
// - if same lenght, mean no repeat
// - if different length, mean repeat
function isIsogram(str) {
	return new Set(str.toLowerCase()).size === str.length;
}

// new Set() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
// The Set constructor lets you create Set objects that store unique values of any type, whether primitive values or object references.
