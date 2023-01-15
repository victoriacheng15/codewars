export function bmi(weight: number, height: number): string {
	const bmi = Number((weight / height ** 2).toFixed(1));
	const result = ["Underweight", "Normal", "Overweight", "Obese"];
	return result[Number(bmi > 30) + Number(bmi > 25) + Number(bmi > 18.5)];
}
