function digitize(n) {
	const arr = [];
	if (n === 0) return [0];
	while (n > 0) {
		const lastDigit = n % 10;
		n = Math.floor(n / 10);
		arr.push(lastDigit);
	}
	return arr;
}

describe("digitize", () => {
	it("should return [1,3,2,5,3] when n = 35231", () => {
		expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
	});

	it("should return [0] when n = 0", () => {
		expect(digitize(0)).toEqual([0]);
	});
});
