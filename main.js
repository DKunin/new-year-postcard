'use strict';

const cards = document.querySelectorAll('.card');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const player = document.querySelector('.player');
const noSound = document.querySelector('.no-sound');
const clickMeLink = document.querySelector('.click-me');

cards.forEach(singleCard => {
    singleCard.addEventListener('click', function() {
        player.play();
        clickMeLink.setAttribute('hidden', true);
        cardFront.classList.toggle('card-flip');
        cardBack.classList.toggle('card-flip');
        noSound.classList.add('playing');
    });
});

noSound.addEventListener('click', () => {
    noSound.classList.remove('playing');
    player.pause();
});
