"use strict"

const findLongestWord = function (strings) {

    let words = strings.split(' ')
    let longWord = words[0]

    for (let i = 1; i < words.length; i += 1) {
        if (longWord.length < words[i].length) {
            longWord = words[i];
        }
    }
    console.log(longWord);
}

findLongestWord('May the force be with you')
