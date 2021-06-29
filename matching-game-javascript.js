// function for creating cards
function gamesetup() {
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
    var cards = gamesetup()
    
}
