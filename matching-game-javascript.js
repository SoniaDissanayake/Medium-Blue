// function for creating cards
function cardCreation() {
    var cards = []
    for (i=1; i<9; i++) {
        var card1 = {
            value: i,
            faceUp: false,
        }
        cards.push(card1)
        cards.push(card1)
    }
    return cards
}

function shuffle() {
    var cards = cardCreation();
    var cardsMoved = 0;
    for (i=0; i<100; i++) {
        var selection1 = Math.floor(Math.random() * 16);
        var selection2 = Math.floor(Math.random() * 16);
        var temp = cards[selection1];
        cards[selection1] = cards[selection2];
        cards[selection2] = temp;
    }
    console.log(cards) 
}

shuffle()