/*
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

/*
PREP:
- convert date to ms
- check both codes,
- if correct, check current and expiration date
- if not correct, return false
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
	const current = Date.parse(currentDate);
	const expiration = Date.parse(expirationDate);
	return enteredCode === correctCode ? current <= expiration : false;
}

/*
note:
- can use Date.parse() intead
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
*/
