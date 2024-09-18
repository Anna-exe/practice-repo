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

var game = document.getElementById('game');

function loadCards(){
    /* Cards front array*/
    let cards = [
        'https://i.ibb.co/YRRFR6v/warrior.webp',
        'https://i.ibb.co/QkWbTqJ/silent-angel.webp',
        'https://i.ibb.co/0YX9b8d/sauron.webp',
        'https://i.ibb.co/V01BQWN/goddess.webp',
        'https://i.ibb.co/1z6nmgJ/ghost.webp',
        'https://i.ibb.co/cQR9PfW/druid.webp',
        'https://i.ibb.co/QnvC210/blonde-angel.webp',
        'https://i.ibb.co/NjcBtcx/dark-angel.webp'
    ];
    /* Display cards front */
    let frontGrid = document.getElementById('front-grid');
    cards.forEach(cards => {
        let frontCard = document.createElement('img');
        frontCard.src = cards;
        frontCard.alt = 'front';
        frontCard.classList = 'card front';
        frontGrid.append(frontCard)
    });

    

    /* Display cards back */
    let backGrid = document.getElementById("back-grid");
    let blank = document.createElement('img');
    blank.src = 'https://i.ibb.co/4K272ww/blank.webp';
    blank.alt = 'blank';
    blank.classList = 'card back';
    backGrid.append(blank);

    /* Clone back of the card */
    const nodeBlank = backGrid.firstChild;
    for(i=0;i<15;i++){
        const cloneBlank = nodeBlank.cloneNode(false);
        backGrid.appendChild(cloneBlank);
    }
}
