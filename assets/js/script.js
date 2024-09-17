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
        'https://i.ibb.co/YRRFR6v/warrior.webp',
        'https://i.ibb.co/QkWbTqJ/silent-angel.webp',
        'https://i.ibb.co/0YX9b8d/sauron.webp',
        'https://i.ibb.co/V01BQWN/goddess.webp',
        'https://i.ibb.co/1z6nmgJ/ghost.webp',
        'https://i.ibb.co/cQR9PfW/druid.webp',
        'https://i.ibb.co/QnvC210/blonde-angel.webp',
        'https://i.ibb.co/NjcBtcx/dark-angel.webp',
        'https://i.ibb.co/YRRFR6v/warrior.webp',
        'https://i.ibb.co/QkWbTqJ/silent-angel.webp',
        'https://i.ibb.co/0YX9b8d/sauron.webp',
        'https://i.ibb.co/V01BQWN/goddess.webp',
        'https://i.ibb.co/1z6nmgJ/ghost.webp',
        'https://i.ibb.co/cQR9PfW/druid.webp',
        'https://i.ibb.co/QnvC210/blonde-angel.webp',
        'https://i.ibb.co/NjcBtcx/dark-angel.webp'
];
const blank = 'https://i.ibb.co/4K272ww/blank.webp'
const container = document.getElementById('container');

function loadCards(){
    let frontGrid = document.getElementById('front-grid');
    cards.forEach(cards => {
        let card = document.createElement('img');
        card.src = cards;
        frontGrid.append(card)
    });

    const backGrid = document.getElementById("back-grid");
    let blank = document.createElement('img');
    blank.src = 'https://i.ibb.co/4K272ww/blank.webp';
    blank.alt = 'blank';
    backGrid.append(blank);

    /*let backGrid = document.getElementById('back-grid');
    document.createElement('img');
    blankCard.src = blank;
    frontGrid.append(blankCard)


    for(let x = 0; x < 16; x++) {
	let cln = backGrid.cloneNode(true);
	container.append(cln)*/

}
