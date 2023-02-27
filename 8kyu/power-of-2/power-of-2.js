function powersOfTwo(n) {
	const res = [];
	for (let num = 0; num <= n; num++) {
		res.push(2 ** num);
	}

	return res;
}
