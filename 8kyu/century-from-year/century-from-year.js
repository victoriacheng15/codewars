function century(year) {
	const calcCentury = Math.floor(year / 100);
	return year % 100 === 0 ? calcCentury : calcCentury + 1;
}
