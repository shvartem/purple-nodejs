const {getMillisecondsFromHoursMinutesSeconds} = require('./time');
const {getHoursMinutesSeconds} = require('./transform');
const {validateArgs, validatePositiveNumbers} = require('./validate');

const defaultMessage = 'Таймер сработал';

function timer({first, second, third, fourth}) {
    validateArgs(first, second, third, fourth);

    const {hours, minutes, seconds, message} = getHoursMinutesSeconds(first, second, third, fourth);

    validatePositiveNumbers(hours, minutes, seconds);

    const delay = getMillisecondsFromHoursMinutesSeconds({hours, minutes, seconds});

    setTimeout(() => {
        console.log(message || defaultMessage);
    }, delay);
}

module.exports = {
    timer,
};
