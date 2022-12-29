/*
Will you make it?
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog and NASM) if it is possible and false (0 in Prolog and NASM) if not. The input values are always positive.
*/

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
