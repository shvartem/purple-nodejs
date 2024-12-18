function parseValue(rawStr, suffix) {
    const res = Number(rawStr.replace(suffix, ''));

    if (Number.isNaN(res)) {
        throw new Error(`Не удалось прочитать число из '${rawStr}'. Введите корректное значение`);
    }

    return res;
}

function getValue(rawArg) {
    const suffix = rawArg.replace(/^\d+/, '');

    if (suffix === 'h') {
        return {hours: parseValue(rawArg, 'h')};
    } else if (suffix === 'm') {
        return {minutes: parseValue(rawArg, 'm')};
    } else if (suffix === 's') {
        return {seconds: parseValue(rawArg, 's')};
    } else {
        throw new Error(`Введен некорректный суффикс. Возможные суффиксы: h, m, s`);
    }
}

module.exports = {
    getValue,
};
