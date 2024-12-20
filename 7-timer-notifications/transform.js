const {parseRawValue} = require('./parse');

function useValues() {
    const values = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        message: '',
    };

    function updateValuesByKey(key, value) {
        if (value) {
            values[key] += value;
        }
    }

    return {
        values,
        updateValuesByKey,
    };
}

function getHoursMinutesSeconds(...args) {
    const {values, updateValuesByKey} = useValues();

    args.forEach((arg) => {
        const {key, value} = parseRawValue(arg);

        updateValuesByKey(key, value);
    });

    return values;
}

module.exports = {
    getHoursMinutesSeconds,
};
