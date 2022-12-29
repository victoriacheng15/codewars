/* 
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

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
