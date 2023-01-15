export function humanYearsCatYearsDogYears(
	humanYears: number,
): [number, number, number] {
	let dogYears = 0;
	let catYears = 0;
	for (let i = 1; i <= humanYears; i += 1) {
		switch (i) {
			case 1:
				catYears += 15;
				dogYears += 15;
				break;
			case 2:
				catYears += 9;
				dogYears += 9;
				break;
			default:
				catYears += 4;
				dogYears += 5;
		}
	}

	return [humanYears, catYears, dogYears];
}
