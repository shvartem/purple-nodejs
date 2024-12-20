const {bits} = require('./constants');

function parseSuffix(str) {
    if (str?.length > 1) {
        return str?.replace(/^-?\d+/, '');
    }
}

function parseNumberFromRaw(rawStr, suffix) {
    const res = Number(rawStr.replace(suffix, ''));

    if (Number.isNaN(res)) {
        throw new Error(`Не удалось прочитать число из '${rawStr}'. Введите корректное значение`);
    }

    return res;
}

function parseRawValue(rawArg) {
    const suffix = parseSuffix(rawArg);

    if (suffix === bits.hours) {
        return {key: 'hours', value: parseNumberFromRaw(rawArg, bits.hours)};
    } else if (suffix === bits.minutes) {
        return {key: 'minutes', value: parseNumberFromRaw(rawArg, bits.minutes)};
    } else if (suffix === bits.seconds) {
        return {key: 'seconds', value: parseNumberFromRaw(rawArg, bits.seconds)};
    } else {
        return {key: 'message', value: rawArg};
        // throw new Error(`Введен некорректный суффикс. Возможные суффиксы: h, m, s`);
    }
}

function getArgsCountMax(firstArg) {
    const suffix = parseSuffix(firstArg);

    switch (suffix) {
        case bits.hours:
            return 4;

        case bits.minutes:
            return 3;

        case bits.seconds:
            return 2;

        default:
            throw new Error('Введены некорректные параметры');
    }
}

function parseArgs(first, second, third, fourth) {}

module.exports = {
    getArgsCountMax,
    parseSuffix,
    parseRawValue,
};
