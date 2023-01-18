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
