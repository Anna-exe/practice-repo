// Onload functions
window.onload = () => {
    musicControls();
}

//* Music controls
function musicControls() {
    const backgroundMusic = document.getElementById('background-music');
    const playButton = document.getElementById('play-btn');
    const pauseButton = document.getElementById('pause-btn');

    if (playButton) {
        playButton.addEventListener('click', () => {
            backgroundMusic.play();
        });
    }

    if (pauseButton) {
        pauseButton.addEventListener('click', () => {
            backgroundMusic.pause();
        });
    }
    
}

// Card game grid
const grid = document.getElementById('grid');
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.getElementById('score').textContent = score;