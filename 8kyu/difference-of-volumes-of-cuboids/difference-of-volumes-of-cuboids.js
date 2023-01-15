function findDifference(a, b) {
	const cubeVolume = (arr) => arr.reduce((total, num) => (total *= num), 1);

	return Math.abs(cubeVolume(a) - cubeVolume(b));
}
