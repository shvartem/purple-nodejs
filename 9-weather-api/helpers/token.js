async function saveToken(token) {
    if (!token.length) {
        throw new Error('Не передан токен');
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);

        return ('Токен сохранен');
    } catch (error) {
        printError(error.message);
    }
}
