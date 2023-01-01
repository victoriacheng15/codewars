/* 
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

function updateLight(current) {
	const lights = ["green", "yellow", "red"];
	const signal = (index) => lights[index];
	if (current === signal(0)) return signal(1);
	if (current === signal(1)) return signal(2);
	if (current === signal(2)) return signal(0);
}

// or

function updateLight1(current) {
	const siginal = {
		green: "yellow",
		yellow: "red",
		red: "green",
	};
	return siginal[current];
}
