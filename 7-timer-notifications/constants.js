const bits = {
    hours: 'h',
    minutes: 'm',
    seconds: 's',
};

const bitsMap = {
    h: 'hours',
    m: 'minutes',
    s: 'seconds',
};

const timeArgsOrder = [bits.hours, bits.minutes, bits.seconds];

module.exports = {
    timeArgsOrder,
    bits,
    bitsMap,
};
