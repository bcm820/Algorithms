// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens.
// Out of the last 100 days, there were:
// 10 days with volcanos,
// 15 others with tsunamis,
// 20 earthquakes,
// 25 blizzards,
// and 30 meteors
// (for 100 days total).
// If these probabilities continue,
// write whatHappensToday() to print a day's outcome.

function whatHappensToday(){
	var prob = Math.floor(Math.random) * 100;
	if (prob < 10){
		console.log("volcano")
	}
	if (prob >= 10 < 25){
		console.log("tsunami")
	}
	if (prob >= 25 < 45){
		console.log("earthquake")
	}
	if (prob >= 45 < 70){
		console.log("blizzard")
	}
	if (prob >= 70 < 100){
		console.log("meteor")
	}
}