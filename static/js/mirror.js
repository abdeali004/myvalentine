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
	"https://media.tenor.com/A0zSm8XszmUAAAAj/bubu-dudu-sseeyall.gif",
	"https://media.tenor.com/HVAiKTa_5XoAAAAM/good-morning.gif",
	"https://media.tenor.com/BgdWDiBSd0oAAAAM/bubu-dudu-beach-party.gif",
	"https://media.tenor.com/YeALWQcVFpEAAAAj/bubu-dudu-rose-dudu-propose.gif",
	"https://media.tenor.com/pmB6eX_aMQ4AAAAj/bubu-dudu-sseeyall.gif",
	"https://media.tenor.com/5IwZW7QpyoYAAAAM/love-bubu-dudu.gif"
];

document.addEventListener('DOMContentLoaded', function() {
	let current = -1;
	const mirrorContent = document.getElementById('mirror-content');

	mirrorContent.addEventListener('click', function() {
		mirrorContent.style.backgroundImage = `url(${images[++current % images.length]})`;
	});
});