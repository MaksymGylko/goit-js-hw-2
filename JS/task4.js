"use strict"

const formatString = function (string) {
    console.log(string.length);

    if (string.length > 40) {
        console.log(string.slice(0, 40) + '...');
    } else console.log(string);
}


formatString('Curabitur ligula sapien, tincidunt non.')