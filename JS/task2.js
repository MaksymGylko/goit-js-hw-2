"use strict"

const calculateEngravingPrice = function (message, pricePerWord) {
    let quantityOfWords = message.split(' ');
    console.log(quantityOfWords.length * pricePerWord);
}

calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);