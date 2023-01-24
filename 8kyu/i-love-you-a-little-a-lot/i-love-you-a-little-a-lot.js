/* 
PREP:
- set up phrase obj
- use modular to get the reminder
- return phrase[reminder]
*/

function howMuchILoveYou(nbPetals) {
	const phrase = {
		1: "I love you",
		2: "a little",
		3: "a lot",
		4: "passionately",
		5: "madly",
		0: "not at all",
	};
	return phrase[nbPetals % 6];
}
