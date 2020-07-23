"use strict"

const checkForSpam = function (message) {

    let newString = message.split(' ')
    newString = message.toLowerCase()
        if (newString.includes('spam') || newString.includes('sale')) {
            console.log(true);
        } else console.log(false);
}



checkForSpam('[SPAM] How to earn fast money?')