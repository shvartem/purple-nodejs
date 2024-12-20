const {formatPrettyDelay} = require('./format');
const {notifierFn} = require('./notifier');
const {getMillisecondsFromHoursMinutesSeconds} = require('./time');
const {getHoursMinutesSeconds} = require('./transform');
const {validateArgs, validatePositiveNumbers} = require('./validate');

const defaultMessage = 'Таймер сработал';

function timer({first, second, third, fourth}) {
    validateArgs(first, second, third, fourth);

    const {hours, minutes, seconds, message} = getHoursMinutesSeconds(first, second, third, fourth);

    validatePositiveNumbers(hours, minutes, seconds);

    const delay = getMillisecondsFromHoursMinutesSeconds({hours, minutes, seconds});

    const prettyDelay = formatPrettyDelay({hours, minutes, seconds});

    console.log(`Через ${prettyDelay} запланировано уведомление: ${message || defaultMessage}`);

    setTimeout(notifierFn, delay, message);
}

module.exports = {
    timer,
};
