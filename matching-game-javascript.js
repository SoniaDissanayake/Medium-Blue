// Global Variables
var cards = [];         // store all the cards
var turnCounter = 0;    // the number of turns
var values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];        // number values to be stored in the cards
var firstCard;          // a variable that stores the first card the player clicks on
var matchedCards = 0;   // counts the number of matched cards. When this variable reaches a value of 16, the game is over

// Functions
initiate();
gameSetup();

// Setups the event listeners and the cards[] array. Only ever called once
function initiate()
{
    cards = document.getElementsByClassName("card");            // gets all 16 card elements from the document and stores them into cards[]
    for(var i = 0; i < 16; i++)
    {
        cards[i].addEventListener("click", showCard, false);    // adds eventListeners to each card element
    }
}

// Adds a number value to each card through the "num" attribute. Also makes sure that all the cards can be clicked on
function cardsSetup()
{
    for(var i = 0; i < 16; i++)
    {
        cards[i].num = values[i];           // IMPORTANT: the "num" attribute does not exist yet. When creating the HTML file, the "num" attribute must be created 
        cards[i].disabled = false;          // makes sure that the cards can be clicked on
    }
}

// The function that will start/reset the game to its original state
function gameSetup()
{
    shuffleValues();        // shuffle the values
    cardsSetup();           // re-initialize the value for each card
    turnCounter = 0;        // resets the turn counter
    matchedCards = 0;       // resets the matchedCards counter
}

// The function that is triggered by the eventListeners on each of the cards. This function is run whenever the user clicks 
// on one of the cards
function showCard()
{
    if(firstCard == null)       // If firstCard is null, that means this is the players first click
    {
        firstCard = this;
    }
    else                        // If else-statement is called, that means this is the player's second and final click
    {
        checkIfMatch(this);     // Calls function to compare the player's two clicks
    }
    checkGameOver();            // check if all the cards have been matched
}

// This function is called after the player has flipped over two cards. It will check the player's flipped cards, with the
// first card being represented by firstCard and the second card being represented by the parameter secondCard
function checkIfMatch(secondCard)
{
    if(firstCard.num == secondCard.num)         // if both match
    {
        firstCard.disabled = true;              // These two cards are now unclickable and will not provoke the showCard() function
        secondCard.disabled = true;
        matchedCards += 2;                      // Increment the number of matched cards by two
    }
    firstCard = null;                           // reset the firstCard variable
    turnCounter++;                              // increment the turn counter
}

// Checks if the game is over by looking at the value of matchedCards
function checkGameOver()
{
    if(matchedCards == 16)
    {
        gameSetup();            // reset the game 
    }
}

// Shuffles the values in the values[] array
function shuffleValues()
{
    // CODE TO SHUFFLE THE CARDS GOES HERE
}