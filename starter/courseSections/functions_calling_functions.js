

//////////////FUNCTIONS CALLING FUNCTIONS//////////////////

function cutFruitPieces(fruit) {
    return fruit * 4; 
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//See image to display data flow. ==> 2021-01-02-23-47-42.png