const {getValue} = require('./value');

function getHoursMinutesSeconds({first, second, third}) {
    const values = {
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    const touched = {
        hours: false,
        minutes: false,
        seconds: false,
    };

    let argsCountMax = 3;

    function updateValuesByKey(key, value) {
        if (touched[key]) {
            throw new Error(`Нельзя дважды передать ${key}`);
        }

        touched[key] = true;
        values[key] += value;
    }

    if (first) {
        const {hours, minutes, seconds} = getValue(first);

        if (hours !== undefined) {
            updateValuesByKey('hours', hours);
        }

        if (minutes !== undefined) {
            argsCountMax = 2;

            updateValuesByKey('minutes', minutes);
        }

        if (seconds !== undefined) {
            argsCountMax = 1;

            updateValuesByKey('seconds', seconds);
        }
    }

    if (second) {
        if (argsCountMax < 2) {
            throw new Error('Минуты или часы не могут быть после секунд');
        }

        const {hours, minutes, seconds} = getValue(second);

        if (hours !== undefined) {
            throw new Error('Неверный порядок аргументов. Требуемый порядок: часы, минуты, секунды');
        }

        if (minutes !== undefined) {
            updateValuesByKey('minutes', minutes);
        }

        if (seconds !== undefined) {
            updateValuesByKey('seconds', seconds);
        }
    }

    if (third) {
        const {hours, minutes, seconds} = getValue(third);

        if (hours !== undefined || minutes !== undefined) {
            throw new Error('Неверный порядок аргументов. Требуемый порядок: часы, минуты, секунды');
        }

        if (seconds !== undefined) {
            updateValuesByKey('seconds', seconds);
        }
    }

    return values;
}

module.exports = {
    getHoursMinutesSeconds,
};
