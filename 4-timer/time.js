function getMillisecondsFromSeconds(seconds) {
    return seconds * 1000;
}

function getMillisecondsFromMinutes(minutes) {
    return getMillisecondsFromSeconds(minutes * 60);
}

function getMillisecondsFromHours(hours) {
    return getMillisecondsFromMinutes(hours * 60);
}

function getMilliseconds({hours, minutes, seconds}) {
    return getMillisecondsFromHours(hours) + getMillisecondsFromMinutes(minutes) + getMillisecondsFromSeconds(seconds);
}

module.exports = {
    getMilliseconds,
};
