/* 
Classy Classes
Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

Task
Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// get info() {
	//   return `${this.name}s age is ${this.age}`;
	// }

	getInfo() {
		return `${this.name}s age is ${this.age}`;
	}

	get info() {
		return this.getInfo();
	}
}

describe("Person class", () => {
	it("should return an intro", () => {
		const john = new Person("john", 34);
		expect(john.info).toBe("johns age is 34");
	});

	it("should return an intro", () => {
		const viktor = new Person("viktor", 25);
		expect(viktor.info).toBe("viktors age is 25");
	});
});
