let humanYearsCatYearsDogYears = function (humanYears) {
	let dogYears = 0;
	let catYears = 0;
	for (let i = 1; i <= humanYears; i += 1) {
		if (i === 1) {
			dogYears += 15;
			catYears += 15;
		} else if (i === 2) {
			dogYears += 9;
			catYears += 9;
		} else if (i >= 3) {
			dogYears += 5;
			catYears += 4;
		}
	}
	return [humanYears, catYears, dogYears];
};
