export class Kata {
	public static bonusTime(salary: number, bonus: boolean): string {
		return bonus ? `£${salary * 10}` : `£${salary}`;
	}
}

console.log(Kata.bonusTime(2, true));
console.log(Kata.bonusTime(78, false));
