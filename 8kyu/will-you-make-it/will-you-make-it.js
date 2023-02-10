// TODO
// check total fuel need with mpg and fuelLeft
// check if totalfeul is equal or greater than then distanceToPump
// if equal or greater, return true
// if less, return false

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return distanceToPump <= mpg * fuelLeft ? true : false;
};

// updated solution
// TODO
// check total fuel need with mpg and fuelLeft
// check if totalfeul is equal or greater than then distanceToPump
// if equal or greater, return true
// if less, return false
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
	return distanceToPump <= mpg * fuelLeft;
};

// if use comparison operators, it will return boolean values
