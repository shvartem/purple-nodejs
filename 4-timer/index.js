const {getMilliseconds} = require('./time');
const {getHoursMinutesSeconds} = require('./transform');

function timer({first, second, third}) {
    if (!first) {
        console.error('Не переданы параметры для таймера');

        return;
    }

    const {hours, minutes, seconds} = getHoursMinutesSeconds({first, second, third});

    const delay = getMilliseconds({hours, minutes, seconds});

    setTimeout(() => {
        console.log('Таймер сработал');
    }, delay);
}

timer({
    first: process.argv[2],
    second: process.argv[3],
    third: process.argv[4],
});
