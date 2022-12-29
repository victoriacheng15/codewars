/* 
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle
*/

/* 
PREP:
- check l === w or not
- if equal, l * w for its area
- if not, 2 * (l + w) for tis perimeter
*/

const areaOrPerimeter = function (l, w) {
	return l === w ? l * w : 2 * (l + w);
};

describe("area or Perimeter", () => {
	it("should return l * w if l === w", () => {
		expect(areaOrPerimeter(2, 2)).toBe(4);
	});

	it("should return l * w if l === w", () => {
		expect(areaOrPerimeter(2, 5)).toBe(14);
	});
});
