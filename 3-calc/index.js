const {add} = require('./add');
const {subtract} = require('./subtract');
const {divide} = require('./divide');
const {multiply} = require('./multiply');

function calc(x, y, operation) {
    switch (operation) {
        case 'add':
            return add(x, y);

        case 'subtract':
            return subtract(x, y);

        case 'divide':
            return divide(x, y);

        case 'multiply':
            return multiply(x, y);

        default:
            throw new Error('Неизвестная операция');
    }
}

const a = parseFloat(process.argv[2], 10);
const b = parseFloat(process.argv[3], 10);
const op = process.argv[4];

const result = calc(a, b, op);

console.log('Результат: ', result);
