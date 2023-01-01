const areaOrPerimeter = function (l, w) {
	return l === w ? l * w : 2 * (l + w);
};

// describe("area or Perimeter", () => {
// 	it("should return l * w if l === w", () => {
// 		expect(areaOrPerimeter(2, 2)).toBe(4);
// 	});

// 	it("should return l * w if l === w", () => {
// 		expect(areaOrPerimeter(2, 5)).toBe(14);
// 	});
// });
