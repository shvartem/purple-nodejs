function divide(a, b) {
    if (b === 0) {
        return 'Нельзя делить на ноль';
    }

    return a / b;
}

module.exports = {
    divide,
};
