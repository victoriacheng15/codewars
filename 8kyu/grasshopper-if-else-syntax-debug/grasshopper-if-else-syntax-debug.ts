export function checkAlive(health: number): boolean {
	if (health <= 0) {
		return false;
	} else {
		return true;
	}
}
