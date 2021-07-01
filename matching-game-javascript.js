// Global Variables
var cards = [];         // store all the cards
var drawnCards = [];    // stores all drawn cards
var turnCounter = 0;    // the number of turns
// var clicksLeft = 2;     // The number of card flips the player has left before a turn is counted
// var faceUpCards = [];   // The two cards that the player picks to flip over in a turn
var background = document.getElementById("background"); // for accessing the gameboard
var values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];      // values to be stored into each card
var matchedCards = 0;   // The number of matched cards on the board
var firstCard;          // The first card that the user clicks on

// Functions
gameSetup();

// The function that will add all the cards into the cards array. Also adds eventListeners to every card.
// Will only be run once at the very start of the game
function cardsSetup()
{
    for(var i = 0; i < 16; i += 2)
    {
        var card1 = {num: values[i], shown: false, matched: false};      // adds value of numberCounter to the card, adds value of whether or not the card has been shown or not, adds value of whether or not the card has already been matched with another
        var card2 = {num: values[i + 1], shown: false, matched: false};
        cards[i] = card1;                                    // sets the card variable to two of the cards[] indices
        cards[i + 1] = card2;                               // incremenets numberCounter, this variable should go from 1 to 8 throughout the for-loop
        // console.log(cards[i].num, cards[i+1].num);
    }
}

// The function that will start/reset the game back to its original state
function gameSetup()
{
    shuffleValues();         // shuffle the values
    cardsSetup();            // sets up the cards array
    createCards();           // creates div elements of the cards
    turnCounter = 0;         // resetting the counter variables
    matchedCounter = 0;
}

// The function that is triggered by the eventListeners on each of the cards. This function is run whenever the user clicks on one of the cards
function showCard()
{
    if(!this.shown && !this.matched)   // if the card's "shown" value is false (meaning it's flipped over), and if this card hasn't been matched yet, then we flip the card over and set the "shown" value to true
    {
        this.shown = true;
        
        if(firstCard == null)
        {
            firstCard = this;
        }
        else
        {
            checkIfMatch(this);
        }
    }
    visualizeCards();
    checkGameOver();
}

function checkIfMatch(secondCard)
{
    if(firstCard.num == secondCard.num)
    {
        firstCard.matched = true;
        secondCard.matched = true;
        matchedCards += 2;
    }
    else 
    {
        firstCard.shown = false;
        secondCard.shown = false;
    }
    turnCounter++;
    firstCard = null;
}

function checkGameOver()
{
    if(matchedCounter == 16)
    {
        gameSetup();
        alert("YOU WIN!\n\nTurns: " + turnCounter);
    }
}

function shuffleValues()
{
    for (i=0; i<100; i++) 
    {
        var selection1 = Math.floor(Math.random() * 16);
        var selection2 = Math.floor(Math.random() * 16);
        var temp = values[selection1];
        values[selection1] = values[selection2];
        values[selection2] = temp;
    }
};

function createCards()
{
    for (let card of cards)
    {
        var drawnCard = document.createElement("img");
        drawnCard.src = "images/cardBack.png"
        drawnCard.setAttribute("class", "card");
        drawnCard.num = card.num
        drawnCard.addEventListener("click", showCard, false);    // adds eventListener of "click" to the card variable
        drawnCards.push(drawnCard)
        background.appendChild(drawnCard);
    }
    console.log(drawnCards)
};

function visualizeCards() // Used to draw the cards on the document
{
    console.log(drawnCards)
    for (let drawnCard of drawnCards) // Iterates through each of the cards
    {
        if (drawnCard.shown) 
        {
            for (i=1; i<9; i++) 
            {
                if (drawnCard.num == i) 
                {
                drawnCard.src = "images/card" + i + ".png"
                }
            }
        }
        else
        {
            drawnCard.src = "images/cardBack.png"
        }
    }
};