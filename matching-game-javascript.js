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
