function sumOfDifferences(arr) {
	const sorted = arr.sort((a, b) => b - a);
	return sorted.reduce((acc, curr, index, array) => {
		const next = array[index + 1];
		const calc = curr - next;
		if (!isNaN(calc)) {
			acc += calc;
		}
		return acc;
	}, 0);
}
