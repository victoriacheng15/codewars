/* 
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

/* 
PREP：
- map out index + 1 value based on the regex
- filter out any undefined value

note:
you can pass Boolean for filter and it will return any true values
- filter(Boolean)
*/

function vowelIndices(word) {
	const regex = /[aeiouy]/gi;
	const getIndex = (char, index) => {
		if (char.match(regex)) return index + 1;
	};
	return [...word].map(getIndex).filter((value) => value !== undefined);
}
