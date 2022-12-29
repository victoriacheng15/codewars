/* 
Sometimes, I want to quickly be able to convert miles per imperial gallon into kilometers per liter.

Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).

Make sure to round off the result to two decimal points. If the answer ends with a 0, it should be rounded off without the 0. So instead of 5.50, we should get 5.5.

Some useful associations relevant to this kata: 1 Imperial Gallon = 4.54609188 litres 1 Mile = 1.609344 kilometres
*/

function converter(mpg) {
	const LITRES_PER_GALLON = 4.54609188;
	const KILOMETERS_PER_MILE = 1.609344;
	const ratio = KILOMETERS_PER_MILE / LITRES_PER_GALLON;
	return Math.round(100 * mpg * ratio) / 100;
}

describe("convert miles to km", () => {
	it("should return 3.54 km for 10 miles", () => {
		expect(converter(10)).toEqual(3.54);
	});

	it("should return 7.08 km for 20 miles", () => {
		expect(converter(20)).toEqual(7.08);
	});
});
