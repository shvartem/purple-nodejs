function checkIsHelp(firstArg) {
    return firstArg === '-h';
}

function logHelp() {
    console.log(`
Возможное количество аргументов: от 2 до 4. Последний параметр - сообщение, которое хотим видеть в уведомлении.
Примеры:
    1h 2m 3s 'Сработаю через 1д 2м 3с'
    1h 3s 'Сработаю через 1д 3с'
    1m 30s 'Сработаю через 1м 30с'
    14m 'Сработаю через 14м'
    11s 'Сработаю через 11с'
    `);
}

module.exports = {
    checkIsHelp,
    logHelp,
};
