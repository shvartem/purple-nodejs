function divideThree({array}) {
    let count = 0;

    array.forEach((item) => {
        if (item % 3 === 0) {
            count++;
        }
    });

    return count;
}

module.exports = {
    divideThree,
};
