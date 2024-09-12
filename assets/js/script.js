//* Onload functions
window.onload = () => {
    musicControls();
    loadCards();
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

const frontGrid = document.getElementById('front-grid');
const cardsFront = [
    {
        src: 'assets/images/blonde-angel.webp',
        alt: 'Blonde Angel'
    },
    {
        src: 'assets/images/dark-angel.webp',
        alt: 'Dark Angel'
    },
    {
        src: 'assets/images/druid.webp',
        alt: 'Druid'
    }

];


frontGrid.innerHTML = loader;


//* Load cards grid
function loadCards(){
    let loader= "";
    let count = 0;
    for (let i=0; i < cardsFront.lenght; i++){
        let s = `<div class='card front'><img src='${card.location}' alt='${card.alt}' id='card${count}'></div>`;
        loader += s;
        count++;
    }
}