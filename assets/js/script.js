//* Onload functions
window.onload = () => {
    musicControls();
    loadCards();
}

/**
 * Music controls
 */
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

/**
 * Load cards
 */
function loadCards(){
    /* Cards front array */
    let cards = [
        {src: 'https://i.ibb.co/YRRFR6v/warrior.webp', alt: 'warrior'},
        {src: 'https://i.ibb.co/QkWbTqJ/silent-angel.webp', alt: 'silent angel'},
        {src: 'https://i.ibb.co/0YX9b8d/sauron.webp', alt: 'sauron'},
        {src: 'https://i.ibb.co/V01BQWN/goddess.webp', alt: 'goddess'},
        {src: 'https://i.ibb.co/1z6nmgJ/ghost.webp', alt: 'ghost'},
        {src: 'https://i.ibb.co/cQR9PfW/druid.webp', alt: 'druid'},
        {src: 'https://i.ibb.co/QnvC210/blonde-angel.webp', alt: 'blonde angel'},
        {src: 'https://i.ibb.co/NjcBtcx/dark-angel.webp', alt: 'dark angel'},
        {src: 'https://i.ibb.co/YRRFR6v/warrior.webp', alt: 'warrior'},
        {src: 'https://i.ibb.co/QkWbTqJ/silent-angel.webp', alt: 'silent angel'},
        {src: 'https://i.ibb.co/0YX9b8d/sauron.webp', alt: 'sauron'},
        {src: 'https://i.ibb.co/V01BQWN/goddess.webp', alt: 'goddess'},
        {src: 'https://i.ibb.co/1z6nmgJ/ghost.webp', alt: 'ghost'},
        {src: 'https://i.ibb.co/cQR9PfW/druid.webp', alt: 'druid'},
        {src: 'https://i.ibb.co/QnvC210/blonde-angel.webp', alt: 'blonde angel'},
        {src: 'https://i.ibb.co/NjcBtcx/dark-angel.webp', alt: 'dark angel'}
    ];

/*
        let backGrid = document.getElementById('back-grid');
        let cardBack = document.createElement('div');
        cardBack.classList = 'card back';
        backGrid.append(cardBack);
        
        let blank = document.createElement('img');
        blank.src = 'https://i.ibb.co/4K272ww/blank.webp';
        blank.alt = 'blank';
        cardBack.append(blank);*/

    /** Display cards front */
    cards.forEach(cards => {
        let card = `<div class='card'><img src='${cards.src}' alt='${cards.alt}'/></div>`;
        game.innerHTML += card;
    });
    var shuffleCards = cards.sort(() => (Math.random() > .5) ? 2 : -1);
    for (var i = 0; i < cards.length; i++){
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = shuffleCards[i]
    }
}
