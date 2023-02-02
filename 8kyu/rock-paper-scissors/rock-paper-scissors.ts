export function rps(p1: string, p2: string): string{
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
}