//** Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.progress__slider');
//** Functions
//- call .play or .pause
function togglePlay() {
	// ternary method
	const method = video.paused ? 'play' : 'pause';
	// call the video and access method named
	video[method]();
}

functio updateButton() {
	console.log('Update the Button');
}

//** Event Listener
//click on event that run function togglePlay 
video.addEventListener('click', togglePlay)

// listen for video when paused and update the buttons
video.addEventListener('play', togglePlay)

toggle.addEventListener('click', togglePlay)