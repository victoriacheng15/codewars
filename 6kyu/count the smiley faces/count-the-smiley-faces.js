/* 
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

/* 
PREP:
- set regex to detect
- use filter() function to filter out non-smiley faces
- get length

note:
/(:|;)(-|~)?(\)|D)/g

first group - detect : or ; and | here is or operator
second group - same above but detect - or ~
third group - the \ is for )
https://regexr.com/
*/

function countSmileys(arr) {
	const regex = /(:|;)(-|~)?(\)|D)/g;
	return arr.filter((face) => face.match(regex)).length;
}
