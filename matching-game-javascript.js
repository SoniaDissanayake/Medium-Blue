// Global Variables
var cards = [];         // store all the cards
var drawnCards = [];    // stores all drawn cards
var values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];      // values to be stored into each card
var firstCard;          // The first card that the user clicks on

// Audio
var successSound = document.createElement("audio");
successSound.setAttribute("src", "win.wav");
var failSound = document.createElement("audio");
failSound.setAttribute("src", "fail.wav");
var gameOverSound = document.createElement("audio");
gameOverSound.setAttribute("src", "gameOver.wav");

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
    }
}


// The function that will start/reset the game back to its original state
function gameSetup()
{
    deleteDrawnCards();
    cards.length = 0;
    drawnCards.length = 0;
    shuffleValues();         // shuffle the values
    cardsSetup();            // sets up the cards array
    createCards();           // creates div elements of the cards
    turnCounter = 0;         // resetting the counter variables
    matchedCounter = 0;
    visualizeCards();
}

// The function that is triggered by the eventListeners on each of the cards. This function is run whenever the user clicks on one of the cards
function showCard()
{
    if(!this.shown && !this.matched)   // if the card's "shown" value is false (meaning it's flipped over), and if this card hasn't been matched yet, then we flip the card over and set the "shown" value to true
    {
        this.shown = true;
        visualizeCards();
        if(firstCard == null)
        {
            firstCard = this;
        }
        else
        {
            checkIfMatch(this);
        }
    }
    checkGameOver();
}

function checkIfMatch(secondCard)
{
    if(firstCard.num == secondCard.num)
    {
        firstCard.matched = true;
        secondCard.matched = true;
        matchedCounter += 2;
        successSound.play();
    }
    else 
    {
        firstCard.shown = false;
        secondCard.shown = false;
        failSound.play();
    }
    turnCounter ++;
    firstCard = null;
}

function checkGameOver()
{
    if(matchedCounter == 16)
    {
        gameOverSound.play();
        alert("YOU WIN!\n\nTurns: " + turnCounter);
        gameSetup();
        visualizeCards();
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
    for (i=0; i<16; i++)
    {
        var drawnCard = document.createElement("img");
        var targetDiv = document.getElementById("card-body" + i)
        drawnCard.src = "images/cardBack.png"
        drawnCard.setAttribute("class", "gameCard");
        drawnCard.num = cards[i].num;
        drawnCard.addEventListener("click", showCard, false);    // adds eventListener of "click" to the card variable
        drawnCards.push(drawnCard)
        targetDiv.appendChild(drawnCard);
    }
};

function visualizeCards() // Used to draw the cards on the document
{
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

function deleteDrawnCards()
{
    for (let drawnCard of drawnCards)
    {
        drawnCard.remove()
    }
}