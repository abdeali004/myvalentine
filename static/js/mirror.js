// Featured on CodePen's Most Hearted of 2021 list at #69
// https://codepen.io/2021/popular/pens/4

// <!-- JavaScript to Play Sound -->
const playButton = document.getElementById('play-sound');
        const audio = document.getElementById('background-sound');
        function playSong() {
            playButton.click();
        }
        document.getElementById('play-sound').addEventListener('click', function() {
            audio.play();
            playButton.style.display = 'none'; // Hide the button after playing
        });

const images = [
	"static/images/mirror/default-mirror.png",
	"static/gifs/mirror/mirror1.gif",
	"static/images/mirror/mirror1.png",
	"static/gifs/mirror/mirror2.gif",
	"static/images/mirror/mirror2.png",
	"static/gifs/mirror/mirror3.gif",
	"static/images/mirror/mirror3.png",
	"static/gifs/mirror/mirror4.gif",
	"static/images/mirror/mirror4.png",
	"static/gifs/mirror/mirror5.gif",
	"static/images/mirror/mirror5.png",
	"static/gifs/mirror/mirror6.gif",
	"static/images/mirror/mirror6.png",
	"static/gifs/mirror/mirror7.gif",
];

document.addEventListener('DOMContentLoaded', function() {
	let current = 0;
	const mirrorContent = document.getElementById('mirror-content');

	mirrorContent.addEventListener('click', function() {
		mirrorContent.style.backgroundImage = `url(${images[++current % images.length]})`;
	});
});