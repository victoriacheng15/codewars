/* 
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/

/* 
- 2 good = publish
- 2+ good = i smell a series
- zero good = fail
input array and subarray
- filter out bad and then get length
  - check if the element is string or not.
    - if not string, filter out
- add all length
- if 0 => fail!
- if less than 3 => publish!
- lastly return i smell a series!
outout a string or sentence
*/

// function well(x) {
//   const good = /(good)/gi;
//   const count = x
//     .map((arr) => arr.filter((idea) => good.test(idea)).length)
//     .reduce((acc, num) => acc + num, 0);
//   if (count === 0) return 'Fail!';
//   if (count < 3) return 'Publish!';
//   return 'I smell a series!';
// }

function flatArr(arr) {
	return arr.reduce((acc, array) => {
		if (Array.isArray(array)) {
			return acc.concat(array);
		}
		return acc;
	}, []);
}

// function well(x) {
//   const arr = flatArr(x)
//     .filter((idea) => typeof idea === 'string')
//     .filter((idea) => idea.toLowerCase() === 'good').length;
//   if (arr === 0) return 'Fail!';
//   return arr < 3 ? 'Publish!' : 'I smell a series!';
// }

function well(x) {
	const arr = flatArr(x).filter(
		(idea) => typeof idea === "string" && idea.toLowerCase() === "good",
	).length;
	if (arr === 0) return "Fail!";
	return arr < 3 ? "Publish!" : "I smell a series!";
}

describe("well of idea", () => {
	it('should return "Publish!"', () => {
		const input = [
			["gOOd", "bad", "BAD", "bad", "bad"],
			["bad", "bAd", "bad"],
			["GOOD", "bad", "bad", "bAd"],
		];
		expect(well(input)).toBe("Publish!");
	});

	it('should return "Fail!"', () => {
		const input = [
			["bad", "bAd", "bad"],
			["bad", "bAd", "bad"],
			["bad", "bAd", "bad"],
		];
		expect(well(input)).toBe("Fail!");
	});

	it('should return "I smell a series!"', () => {
		const input = [
			["gOOd", "bAd", "BAD", "bad", "bad", "GOOD"],
			["bad"],
			["gOOd", "BAD"],
		];

		expect(well(input)).toBe("I smell a series!");
	});

	it('should return "I smell a series!"', () => {
		const input = [
			[16],
			["BAD", 16, 6, "CAPS", "BAD", "GOOD"],
			["good", "bAd", "BAD", "bad", "bAd", "gOOd"],
		];
		expect(well(input)).toBe("I smell a series!");
	});
});
