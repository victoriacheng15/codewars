/*
PREP:
- set up direction object
- return the direction based on d arguement
*/

const flip = (d, arr) => {
	const direction = {
		R: [...arr].sort((a, b) => a - b),
		L: [...arr].sort((a, b) => b - a),
	};
	return direction[d];
};
