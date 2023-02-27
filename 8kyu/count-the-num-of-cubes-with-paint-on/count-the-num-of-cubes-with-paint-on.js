const countSquares = function (cuts) {
	return cuts === 0 ? 1 : 6 * cuts * cuts + 2;
};

console.log(countSquares(5));
