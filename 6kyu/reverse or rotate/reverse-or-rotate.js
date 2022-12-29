/* 
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

/* 
PREP:
- check if sz is less than 1 and sz is larger than str.length
  - true, return empty string
- set function for reverse
- set function for rotate
- set function to convert string to number
- set function to sum all num power of 3
- set regex to detect length of sz
- set mapped function to check if cubes sum is divisible by 2 or not
  - true, reverse then
  - false, rotate them
- join them together
*/

function revrot(str, sz) {
	if (sz < 1 || sz > str.length) return "";
	const reverse = (rev) => [...rev].reverse().join("");
	const rotate = (rot) => rot.slice(1) + rot.slice(0, 1);
	const toNum = (n) => n * 1;
	const sumCube = (num) =>
		[...num].reduce((prev, cur) => prev + toNum(cur) ** 3, 0);

	const regex = new RegExp(`.{${sz}}`, "g");
	const mapped = (num) => (sumCube(num) % 2 === 0 ? reverse(num) : rotate(num));

	return str.match(regex).map(mapped).join("");
}
