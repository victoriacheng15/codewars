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
