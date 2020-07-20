"use strict"

let total = 0;
let input;
let numbers = []

do {
    input = prompt('Введіть, будь ласка, число');
    Number(input)
    if (input != Number(input) && input != null) {
        alert('Ви ввели не число. Спробуйте, будь ласка, ще')
        continue
    };
    numbers.push(Number(input))
    total = total + Number(input);
}
while (input != null);
console.log(`Загальна сума чисел дорювнює ${total}`);