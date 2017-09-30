// Soaring IQ
// Your time at the Dojo will definitely make you smarter!
// Let's say a new Dojo student entered with a modest IQ of 101.
// During a 14-week bootcamp, his IQ rose by .01 on the first day
// and went up by an additional .02 on the second day, then .03 on
// the third day, etc. until increasing by .98 on his 98th day.
// What is his final IQ?


function finalIQ(){
	var iq = 101;
	var dailyiq = 0;
	for (var day = 1; days <= 98; day++){
		dailyiq += 0.01
		iq+= dailyiq
	}
	console.log(iq)
}