// start after the button is pressed
var audio = new Audio("music/spin.mp3");
function start() {
	audio.play();

	// count time spend on site and display it in "time" paragraph after the button is pressed
	const time = document.querySelector("#time");
	let timeSpend = 0;
	let timer = setInterval(() => {
		timeSpend++;
		time.innerHTML = timeSpend;
	}, 1000);

	// hide the start button, show timer and gif, start animation
	const startButton = document.querySelector(".start-button");
	const clockText = document.querySelector(".clock-text");
	const siteBackground = document.querySelector("body");
	const tomoko = document.querySelector(".tomoko");
	startButton.style.display = "none";
	clockText.style.display = "flex";
	tomoko.style.display = "flex";
	siteBackground.style.animation = "pulse-body 5s ease infinite";
	siteBackground.style.margin = "1rem";
}
