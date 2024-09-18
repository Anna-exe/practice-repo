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
        {src: 'https://i.ibb.co/YRRFR6v/warrior.webp', alt: 'warrior', class: 'card front'},
        {src: 'https://i.ibb.co/QkWbTqJ/silent-angel.webp', alt: 'silent angel', class: 'card front'},
        {src: 'https://i.ibb.co/0YX9b8d/sauron.webp', alt: 'sauron', class: 'card front'},
        {src: 'https://i.ibb.co/V01BQWN/goddess.webp', alt: 'goddess', class: 'card front'},
        {src: 'https://i.ibb.co/1z6nmgJ/ghost.webp', alt: 'ghost', class: 'card front'},
        {src: 'https://i.ibb.co/cQR9PfW/druid.webp', alt: 'druid', class: 'card front'},
        {src: 'https://i.ibb.co/QnvC210/blonde-angel.webp', alt: 'blonde angel', class: 'card front'},
        {src: 'https://i.ibb.co/NjcBtcx/dark-angel.webp', alt: 'dark angel', class: 'card front'}
    ];

    /** Display cards front */
    cards.forEach(cards => {
        let frontCard = `<div class='card front'><img src='${cards.src}' alt='${cards.alt}' class='${cards.class}'/></div>`;
        frontGrid.innerHTML += frontCard;
    });

    /* Display cards back */
    let backGrid = document.getElementById('back-grid');
    let blank = document.createElement('img');
    blank.src = 'https://i.ibb.co/4K272ww/blank.webp';
    blank.alt = 'blank';
    blank.classList = 'card back';
    backGrid.append(blank);

    /* Clone back of the card */
    let nodeBlank = backGrid.firstChild;
    for(i=0;i<15;i++){
        let cloneBlank = nodeBlank.cloneNode(false);
        backGrid.appendChild(cloneBlank);
    }
}
