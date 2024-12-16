const EventEmitter = require('events');

const {add} = require('./add');
const {subtract} = require('./subtract');
const {divide} = require('./divide');
const {multiply} = require('./multiply');

const eventEmitter = new EventEmitter();

eventEmitter.on('result', (result) => {
    console.log('Результат: ', result);
});

const addCalcListener = (eventName, operation) => {
    eventEmitter.on(eventName, (a, b) => {
        eventEmitter.emit('result', operation(a, b));
    });
};

addCalcListener('add', add);
addCalcListener('subtract', subtract);
addCalcListener('divide', divide);
addCalcListener('multiply', multiply);

const a = parseFloat(process.argv[2], 10);
const b = parseFloat(process.argv[3], 10);
const op = process.argv[4];

eventEmitter.emit(op, a, b);
