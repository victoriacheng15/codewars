function enough(cap, on, wait) {
	const isEnough = on + wait;
	return cap - isEnough > 0 ? 0 : isEnough - cap;
}

function enough1(cap, on, wait) {
	return Math.max(wait + on - cap, 0);
}
