/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

/*
steps:
- check length, only accept 4 or 6
- no letters
*/

function validatePIN(pin) {
	const numRegex = /^\d{4}$|^\d{6}$/gi;
	return !!pin.match(numRegex);
}
