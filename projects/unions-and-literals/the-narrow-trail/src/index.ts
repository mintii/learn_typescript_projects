export function runCommands() {
	//Available Resource: Which of Food or Water will be available to resupply (see later), initially without a value
	// Day: What day of travel it is, initially 1
	// Food: A numeric value for how much food the player has left, initially 5
	// Water: A numeric value for how much water the player has left, initially 5
	// Distance: A numeric value for how far the player has travelled, initially 0
	let availableResource: "food" | "water" | undefined;
	let food: number = 5;
	let water: number = 5;
	let distance: number = 0;

	for (let time = 1; time <= 7; time += 1) {
		let diceRoll = Math.floor(Math.random() * 6) + 1;

		// 1, Food: Subsequent Resupply rolls will increase the player's Food supplies
		// 2, Water: Subsequent Resupply rolls will increase the player's Water supplies
		// 3-6, Resupply:
		// If no Available Resource value is set: set Available Resource to Food if the rolled number is even or Water if the rolled number is odd
		// If an Available Resource value is set: increase the corresponding resource by the rolled number, then unset the Available Resource value.

		// case for diceRoll
		switch (diceRoll) {
			case 1:
				availableResource = "food";
				break;
			case 2:
				availableResource = "water";
				break;
			default:
				availableResource = diceRoll % 2 === 0 ? "food" : "water";
				break;
		}
	}

	return true;
}
