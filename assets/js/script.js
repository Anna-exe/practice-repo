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
const frontGrid = document.getElementById('front-grid');
/**
 * Load cards
 */
function loadCards(){
    /* Cards front array*/
    let cards = [
        {src: 'https://i.ibb.co/YRRFR6v/warrior.webp', alt: 'warrior'},
        {src: 'https://i.ibb.co/QkWbTqJ/silent-angel.webp', alt: 'silent angel'},
        {src: 'https://i.ibb.co/0YX9b8d/sauron.webp', alt: 'sauron'},
        {src: 'https://i.ibb.co/V01BQWN/goddess.webp', alt: 'goddess'},
        {src: 'https://i.ibb.co/1z6nmgJ/ghost.webp', alt: 'ghost'},
        {src: 'https://i.ibb.co/cQR9PfW/druid.webp', alt: 'druid'},
        {src: 'https://i.ibb.co/QnvC210/blonde-angel.webp', alt: 'blonde angel'},
        {src: 'https://i.ibb.co/NjcBtcx/dark-angel.webp', alt: 'dark angel'}
    ];

    /** Display cards front */
    cards.forEach(cards => {
        let frontCard = `<div class='card front'><img src='${cards.src}' alt='${cards.alt}'/></div>`;
        frontGrid.innerHTML += frontCard;
    });

    /* Display cards back */
    /* Create div for cards */
    let backGrid = document.getElementById('back-grid');
    let cardBack = document.createElement('div');
    cardBack.classList = 'card back';
    backGrid.append(cardBack);

    /* Create image element */
    let blank = document.createElement('img');
    blank.src = 'https://i.ibb.co/4K272ww/blank.webp';
    blank.alt = 'blank';
    cardBack.append(blank);

    /* Clone back of the card */
    let nodeBlank = backGrid.firstChild;
    for(i=0;i<15;i++){
        let cloneBlank = nodeBlank.cloneNode(true);
        backGrid.appendChild(cloneBlank);
    }
    
    /**
     * Flip cards
     */
    function flipCard(){
        this.classList.toggle('flip');
    }
    let allCards = document.querySelectorAll('.card');
    allCards.forEach(allCards=>allCards.addEventListener('click', flipCard))
}
