/* 
PREP:
- use includes() to check if the birds array has geese or not
- filter out any birds that are not part of geese
*/

function gooseFilter(birds) {
	const geese = [
		"African",
		"Roman Tufted",
		"Toulouse",
		"Pilgrim",
		"Steinbacher",
	];
	return birds.filter((elem) => !geese.includes(elem));
}
