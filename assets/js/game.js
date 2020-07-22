//---------------------------Start of mix or Match class------------------------------------------------------

class MixorMatch{
    constructor(totalTime, cards){
            this.cardsArray = cards;
            this.totalTime = totalTime;
            this.timeRemanining = totalTime;
            this.timer = document.getElementById('time-remaining');
            this.ticker = document.getElementById('flips');
            this.audioController = new AudioController();
    }
    startGame(){
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemanining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;

        setTimeout(() =>{
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemanining; // reseting timer and ticker
        this.ticker.innerText = this.totalClicks;
    }
    hideCards(){
        this.cardsArray.forEach(card => {
            card.classList.remove('vis');
            card.classList.remove('matched');
        });
    }

    flipCard(card){
        if(this.canFlipCard(card)){
            this.audioController.flip();

            this.totalClicks++; // counts eachtime the cards are clicked
            this.ticker.innerText = this.totalClicks;

            card.classList.add('vis'); //flips the cards using class I created in html 'vis'
            

            if(this.cardToCheck)//for matching cards
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
            
        }
    }
     checkForCardMatch(card){
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
           
            this.cardMatch(card, this.cardToCheck);
        else
             this.cardMisMatch(card, this.cardToCheck);
        
        this.cardToCheck = null;

        
     }
     cardMatch(card1, card2){
        this.matchedCards.push(card1);
         this.matchedCards.push(card2);
         card1.classList.add('matched');
         card2.classList.add('matched');
         this.audioController.match();
         if(this.matchedCards.length === this.cardsArray.length)
         this.victory();
     }
     cardMisMatch(card1, card2){
         //if there's a mis match the user gets a second before the cards flip back
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('vis');
            card2.classList.remove('vis');
            this.busy = false;
        }, 1000);
     }
     getCardType(card){
        return card.getElementsByClassName('card-value')[0].src;
     }
    startCountDown(){
        return setInterval(() => {
            this.timeRemanining--; // decrements the clock
            this.timer.innerText = this.timeRemanining; //changes the html clock
            if(this.timeRemanining === 0)
                this.gameOver();
            
        }, 1000);
    }
    gameOver(){ //game over screen pops up
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('vis');
    }
    victory(){ //victory text pops up
        clearInterval(this.countDown);
        this.audioController.victory();
         document.getElementById('victory-text').classList.add('vis');
    }
     shuffleCards(){ //fisher and yates shuffle - taken from the internet https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
            for(let i = this.cardsArray.length - 1; i > 0; i--)
            {
                let randIndex = Math.floor(Math.random() * (i+1));
                this.cardsArray[randIndex].style.order = i;
                this.cardsArray[i].style.order = randIndex;
            }
        }
    canFlipCard(card){ // if all three of these statements are false then this will return true --to see the card flipping for now
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

//---------------------------end of mix or match class------------------------------------------------------



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
