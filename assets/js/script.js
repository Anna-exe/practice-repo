//* Onload functions
window.onload = () => {
    musicControls();
    loadCards();
}
//
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

const cards = [
    {
        name: 'blonde angel',
        image: 'assets/images/blonde-angel.webp'
    },
    {
        name: 'dark angel',
        image: 'assets/images/dark-angel.webp'
    },
    {
        name: 'druid',
        image: 'assets/images/druid.webp'
    },
    {
        name: 'ghost',
        image: 'assets/images/ghost.webp'
    },
    {
        name: 'goddess',
        image: 'assets/images/goddess.webp'
    },
    {
        name: 'sauron',
        image: 'assets/images/sauron.webp'
    },
    {
        name: 'silent angel',
        image: 'assets/images/silent-angel.webp'
    },
    {
        name: 'warrior',
        image: 'assets/images/warrior.webp'
    }
];