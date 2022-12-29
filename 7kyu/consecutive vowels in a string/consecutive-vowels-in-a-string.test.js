/* 
You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

Good luck!
*/

// function getTheVowels(word) {
//   let [vowels, vowelIndex, count] = ['aeiou', 0, 0];
//   for (let i = 0; i < word.length; i += 1) {
//     if (word[i] === vowels[vowelIndex]) {
//       count += 1;
//       if (vowelIndex === 4) {
//         vowelIndex = 0;
//       } else {
//         vowelIndex += 1;
//       }
//     }
//   }
//   return count;
// }

// function getTheVowels(word) {
//   const vowels = 'aeiou';
//   let vowelIndex = 0;
//   return [...word].reduce((acc, char) => {
//     if (char === vowels[vowelIndex]) {
//       acc += 1;
//       vowelIndex === 4 ? (vowelIndex = 0) : (vowelIndex += 1);
//     }
//     return acc;
//   }, 0);
// }

// function getTheVowels(word) {
//   const vowels = 'aeiou';
//   return [...word].reduce((acc, char) => {
//     if (char === vowels[acc % vowels.length]) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);
// }

// use count % vowelLength, so that way, it can repeat the count until end
// 1 % 5 = 1 , 2 % 5 = 2, 3 % 5 = 3 so on
// 6 % 5 = 1, so on
function getTheVowels(word) {
	const vowels = "aeiou";
	const vowelLength = vowels.length;
	return [...word].reduce(
		(count, char) => count + (char === vowels[count % vowelLength]),
		0,
	);
}

describe("get the vowels", () => {
	it("should return consecutive vowels number", () => {
		expect(getTheVowels("akfheujfkgiaaaofmmfkdfuaiiie")).toBe(7);
	});

	it("should return consecutive vowels number", () => {
		expect(getTheVowels("eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou")).toBe(0);
	});
});
