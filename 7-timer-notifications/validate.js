const {bitsMap, timeArgsOrder} = require('./constants');
const {checkIsHelp, logHelp} = require('./help');
const {parseSuffix, getArgsCountMax} = require('./parse');

function validatePositiveNumbers(...args) {
    const isValid = args.every((num) => num >= 0);

    if (!isValid) {
        throw new Error('Параметры времени не могут быть отрицательными');
    }
}

function checkIsDuplicateArgs(...args) {
    const touched = {
        hours: false,
        minutes: false,
        seconds: false,
    };

    let isDuplicate = false;

    args.forEach((arg) => {
        const suffix = parseSuffix(arg);

        const key = bitsMap[suffix];

        if (!key) {
            return;
        }

        if (touched[key]) {
            isDuplicate = true;

            // throw new Error(`Нельзя дважды передать ${key}`);
        }

        touched[key] = true;
    });

    return isDuplicate;
}

function checkOrdersArgs(...args) {
    const maxCountArgs = getArgsCountMax(args[0]);

    const maxCountTimeArgs = maxCountArgs - 1;

    const startIndex = timeArgsOrder.length - maxCountTimeArgs;

    const orders = timeArgsOrder.slice(startIndex, timeArgsOrder.length);

    let isValidOrders = true;

    args.forEach((arg, ind) => {
        const suffix = arg > 1 ? parseSuffix(arg) : null;

        if (suffix && suffix !== orders[ind]) {
            console.log(arg, suffix, orders[ind]);

            isValidOrders = false;

            // throw new Error('Неверный порядок аргументов. Требуемый порядок: часы, минуты, секунды');
        }
    });

    return isValidOrders;
}

function validateArgs(first, second, third, fourth) {
    if (!first) {
        console.error('Справка доступна по флагу -h');

        return;
    }
    if (checkIsHelp(first)) {
        logHelp();

        return;
    }

    if (checkIsDuplicateArgs(first, second, third, fourth)) {
        throw new Error('Нельзя дважды передать однотипный параметр');
    }

    if (!checkOrdersArgs(first, second, third, fourth)) {
        throw new Error('Неверный порядок аргументов. Требуемый порядок: часы, минуты, секунды');
    }
}

module.exports = {
    validateArgs,
    validatePositiveNumbers,
};
