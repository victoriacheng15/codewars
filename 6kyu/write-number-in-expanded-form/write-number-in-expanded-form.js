/* 
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

/* 
PREP:
- convert num to array and then reverse
- map value with 10^index (index is the how many zero you need)
- reverse array again
- join them with + 
*/

function expandedForm(num) {
	const reversedArr = [...`${num}`].reverse();
	return reversedArr
		.map((value, index) => value * 10 ** index)
		.filter((value) => value > 0)
		.reverse()
		.join(" + ");
}
