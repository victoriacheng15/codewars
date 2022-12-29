/* 
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).
*/

/* 
p - take 2 array parameters
r - return string
e - ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"] => (A : 20) - (B : 114) - (C : 50) - (W : 0)
p
- set up store function to get total qtr of each item
- set up counts function to get final list
  - if the item doesnt exists in the store list, make it equal to zero
  - if the item exists in the store list, get the existed qtr
- use reduce function to check for item  
- split each string with space
- add number up
- return string with (), category of letter, the total, e.g. '(A: 100) - (B: 200)'
*/

function stockList(listOfArt, listOfCat) {
	if (!(listOfArt.length && listOfCat.length)) return "";
	const store = listOfArt.reduce((acc, inventory) => {
		const [[item], qty] = inventory.split(" ");
		const stock = (acc[item] || 0) + Number(qty);
		return { ...acc, [item]: stock };
	}, {});

	const counts = listOfCat.reduce(
		(acc, item) => ({ ...acc, [item]: store[item] || 0 }),
		{},
	);
	const mapped = ([item, qtr]) => `(${item} : ${qtr})`;
	return Object.entries(counts).map(mapped).join(" - ");
}

describe("sort stock list", () => {
	it("should return the category", () => {
		const stock = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
		expect(stockList(stock, ["A", "B"])).toEqual("(A : 200) - (B : 1140)");

		const stock1 = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"];
		expect(stockList(stock1, ["A", "B", "C", "W"])).toEqual(
			"(A : 0) - (B : 114) - (C : 70) - (W : 0)",
		);
	});
});
