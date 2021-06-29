// Global Variables
var cards = [];         // store all the cards
var turnCounter = 0;    // the number of turns


// Functions
cardsSetup();
gameSetup();

// The function that will add all the cards into the cards array. Also adds eventListeners to every card.
// Will only be run once at the very start of the game
function cardsSetup()
{
    numberCounter = 1;
    for(var i = 0; i < 16; i += 2)
    {
        var card = {num: numberCounter, shown: false};      // adds value of numberCounter to the card, adds value of whether or not the card has been shown or not
        card.addEventListener("click", showCard, false);    // adds eventListener of "click" to the card variable
        cards[i] = card;                                    // sets the card variable to two of the cards[] indices 
        cards[i + 1] = card;
        numberCounter++;                                    // incremenets numberCounter, this variable should go from 1 to 8 throughout the for-loop
    }
}

// The function that will start/reset the game back to its original state
function gameSetup()
{
    shuffleCards();         // shuffle the cards
}