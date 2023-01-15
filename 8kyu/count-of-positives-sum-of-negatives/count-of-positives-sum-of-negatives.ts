export function countPositivesSumNegatives(input: any) {
	if (!input?.length) return [];

	let [positive, negative] = [0, 0];
	for (const num of input) {
		if (num > 0) positive++;
		if (num < 0) negative += num;
	}

	return [positive, negative];
}
