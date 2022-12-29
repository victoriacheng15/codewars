/* 
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/

function alphabetWar(fight) {
	const left = { w: 4, p: 3, b: 2, s: 1 };
	const right = { m: 4, q: 3, d: 2, z: 1 };
	const scoreboard = [...fight].reduce(
		(score, char) => {
			const getKey = (side) => Object.keys(score).find((key) => key === side);
			if (right[char]) score[getKey("rightScore")] += right[char];
			if (left[char]) score[getKey("leftScore")] += left[char];
			return score;
		},
		{
			rightScore: 0,
			leftScore: 0,
		},
	);

	const { rightScore, leftScore } = scoreboard;
	// if (rightScore > leftScore) return 'Right side wins!';
	// if (rightScore < leftScore) return 'Left side wins!';
	// return "Let's fight again!";
	// or this way with tenery operator
	return rightScore === leftScore
		? "Let's fight again!"
		: `${rightScore > leftScore ? "Right" : "Left"} side wins!`;
}

// set right side to be postive while negative for left
// function alphabetWar(fight) {
//   const map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
//   const result = [...fight].reduce(
//     (score, char) => (score += map[char] || 0),
//     0
//   );
//   return result
//     ? `${result > 0 ? 'Right' : 'Left'} side wins!`
//     : "Let's fight again!";
// }

describe("alphabet war", () => {
	it("should return right side wins!", () => {
		expect(alphabetWar("z")).toBe("Right side wins!");
		expect(alphabetWar("rqfgxslnmprn")).toBe("Right side wins!");
	});

	it("should return Left side wins!", () => {
		expect(alphabetWar("wwwwww")).toBe("Left side wins!");
	});

	it("should return Let's fight again!", () => {
		expect(alphabetWar("zdqmwpbs")).toBe("Let's fight again!");
	});
});
