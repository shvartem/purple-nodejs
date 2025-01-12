import {saveKeyValue, TOKEN_DICTIONARY} from '../services/storage.service';

async function saveToken(token: string) {
    if (!token.length) {
        throw new Error('Не передан токен');
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);

        return 'Токен сохранен';
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
