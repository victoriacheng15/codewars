/* 
PREP:
- calc BMI based on weight / height ** 2
- use if statement to return the result
*/

function bmi(weight, height) {
	const calcBMI = weight / height ** 2;
	if (calcBMI <= 18.6) {
		return "Underweight";
	}
	if (calcBMI <= 25) {
		return "Normal";
	}
	if (calcBMI <= 30) {
		return "Overweight";
	}
	if (calcBMI > 30) {
		return "Obese";
	}
}
