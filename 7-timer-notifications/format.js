function formatPrettyDelay({hours, minutes, seconds}) {
    const prettyHours = hours ? `${hours}час.` : '';
    const prettyMinutes = minutes ? `${minutes}мин.` : '';
    const prettySeconds = seconds ? `${seconds}сек.` : '';

    return [prettyHours, prettyMinutes, prettySeconds].filter(Boolean).join(' ');
}

module.exports = {
    formatPrettyDelay,
};
