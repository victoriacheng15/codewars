import { describe, expect, it } from "vitest";

// class Ball {
//   constructor(ballType) {
//     this.ballType = ballType || 'regular';
//   }
// }

const Ball = function (ballType) {
	this.ballType = ballType || "regular";
};

describe("ball", () => {
	it("should return regular type", () => {
		const ball1 = new Ball();
		expect(ball1.ballType).toBe("regular");
	});

	it("should return super type", () => {
		const ball2 = new Ball("super");
		expect(ball2.ballType).toBe("super");
	});
});
