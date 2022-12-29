/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.


Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/

const rps = (p1, p2) => {
	switch (p1 + p2) {
		case "scissorspaper":
		case "rockscissors":
		case "paperrock": {
			return "Player 1 won!";
			break;
		}
		case "scissorsrock":
		case "paperscissors":
		case "rockpaper": {
			return "Player 2 won!";
			break;
		}
		default:
			return "Draw!";
			break;
	}
};
