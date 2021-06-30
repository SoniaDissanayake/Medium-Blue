// Global Variables
var cards = [];         // store all the cards
var turnCounter = 0;    // the number of turns
var values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];        // number values to be stored in the cards
var firstCard;          // a variable that stores the first card the player clicks on
var matchedCards = 0;   // counts the number of matched cards. When this variable reaches a value of 16, the game is over
var background = document.getElementById("background");               // for accessing the gameboard


// Functions
// initiate();
gameSetup();

// Setups the event listeners and the cards[] array. Only ever called once
// function initiate()
// {
//     cards = document.getElementsByClassName("card");            // gets all 16 card elements from the document and stores them into cards[]
//     for(var i = 0; i < 16; i++)
//     {
//         cards[i].addEventListener("click", showCard, false);    // adds eventListeners to each card element
//     }
// }

// Adds a number value to each card through the "num" attribute. Also makes sure that all the cards can be clicked on
function cardsSetup()
{
    for(var i = 0; i < 16; i += 2)
    {
        var card = {num: value[i], shown: false, matched: false};       // adds value of numberCounter to the card, adds value of whether or not the card has been shown or not, adds value of whether or not the card has already been matched with another
        cards[i] = card;                          // sets the card variable to two of the cards[] indices 
        cards[i + 1] = card;                      
    }
}

// The function that will start/reset the game to its original state
function gameSetup()
{
    shuffleValues();        // shuffle the values
    cardsSetup();           // re-initialize the value for each card
    createCards();          // creates div elements of the cards
    turnCounter = 0;        // resets the turn counter
    matchedCards = 0;       // resets the matchedCards counter
}

// The function that is triggered by the eventListeners on each of the cards. This function is run whenever the player clicks 
// on one of the cards
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

// This function is called after the player has flipped over two cards. It will check the player's flipped cards, with the
// first card being represented by firstCard and the second card being represented by the parameter secondCard
// function checkIfMatch(secondCard)
// {
//     if(firstCard.num == secondCard.num)         // if both match
//     {
//         firstCard.disabled = true;              // These two cards are now unclickable and will not provoke the showCard() function if clicked
//         secondCard.disabled = true;
//         matchedCards += 2;                      // Increment the number of matched cards by two
//     }
//     firstCard = null;                           // reset the firstCard variable
//     turnCounter++;                              // increment the turn counter
// }

// Checks if the game is over by looking at the value of matchedCards
function checkGameOver()
{
    if(matchedCards == 16)
    {
        gameSetup();            // reset the game 
    }
    // DISPLAY THE TURN COUNTER HERE
    alert("YOU WIN!\n\nTurns: " + turnCounter);
}

// Shuffles the values in the values[] array
function shuffleValues()
{
    for (i = 0; i < 100; i++) 
    {
        var selection1 = Math.floor(Math.random() * 16);
        var selection2 = Math.floor(Math.random() * 16);
        var temp = values[selection1];
        values[selection1] = values[selection2];
        values[selection2] = temp;
    }
}

function createCards()
{
    for (let card of cards)
    {
        var drawnCard = document.createElement("div");
        drawnCard.setAttribute("class", "cardCSS");
        drawnCard.num = card.num
        drawnCard.addEventListener("click", test, false);    // adds eventListener of "click" to the card variable
        drawnCards.push(drawnCard)
        background.appendChild(drawnCard);
    }
    console.log(drawnCards)
}

function test() // temporary replacement for showcard
{
    this.shown = true
    visualizeCards()
}

function visualizeCards() // Used to draw the cards on the document
{
    console.log(drawnCards)
    for (let drawnCard of drawnCards) // Iterates through each of the cards
    {
        if (drawnCard.shown) 
        {
            if (drawnCard.value = 1) 
            {
              drawnCard.textContent = 1  
            }
        }
        else
        {
            console.log("woo no")
        }
    }
}