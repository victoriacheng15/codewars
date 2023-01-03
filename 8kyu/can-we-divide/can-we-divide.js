function isDivideBy(number, a, b) {
	// checke the answer is integer or not after divide
	return Number.isInteger(number / a) && Number.isInteger(number / b)
		? true
		: false;
}

// updated solution
function isDivideBy(number, a, b) {
	return number % a === 0 && number % b === 0;
}

// if use comparison operators, it will return boolean values
