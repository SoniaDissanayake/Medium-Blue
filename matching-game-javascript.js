// Global Variables
var cards = [];         // store all the cards
var turnCounter = 0;    // the number of turns
var clicksLeft = 2;     // The number of card flips the player has left before a turn is counted
var faceUpCards = [];   // The two cards that the player picks to flip over in a turn

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
        var card = {num: numberCounter, shown: false, matched: false};      // adds value of numberCounter to the card, adds value of whether or not the card has been shown or not, adds value of whether or not the card has already been matched with another
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

// The function that is triggered by the eventListeners on each of the cards. This function is run whenever the user clicks on one of the cards
function showCard()
{
    if(!this.shown && !this.matched)   // if the card's "shown" value is false (meaning it's flipped over), and if this card hasn't been matched yet, then we flip the card over and set the "shown" value to true
    {
        this.shown = true;
        // CODE TO MAKE THE CARD FLIP OVER ON THE SCREEN GOES HERE
        clicksLeft--;
        faceUpCards.push(this);         // pushes this card that has been flipped faceUp into the array of flipped up cards

        if(clicksLeft == 0)
        {
            checkIfMatch();             // if clicksLeft = 0, the turn is over. We now check to see if the two flipped up cards are a match or not
        }
    }
}

function shuffleCards()
{
    // CODE TO SHUFFLE THE CARDS GOES HERE
}