/* 
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
*/

/* 
PREP:
- input is array
- find min age
- find max age
- calc the difference for oldest and youngest
- return array [youngest, oldest, the difference]
*/

function differenceInAges(ages) {
	const youngest = Math.min(...ages);
	const oldest = Math.max(...ages);
	return [youngest, oldest, oldest - youngest];
}