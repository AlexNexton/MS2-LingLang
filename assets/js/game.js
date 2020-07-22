//---------------------------Start of Ready Function class------------------------------------------------------
function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixorMatch(100, cards); // instance for card game #1

    overlays.forEach(overlay => {
        overlay.addEventListener('click',() =>{
            overlay.classList.remove('vis');
             game.startGame(); //starts the game #1
            /*let audioController = new AudioController();
            audioController.startMusic(); */
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () =>{
            game.flipCard(card); //flips a card #1
        });
    });
} 


if(document.readyState === 'loading'){
 document.addEventListener('DOMContentLoaded', ready()); //loads script once the html has finished loading.
}else{
    ready(); //else call it anyway assumming it's already loaded
}
