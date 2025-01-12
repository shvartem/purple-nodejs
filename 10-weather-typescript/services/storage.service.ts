import fsPromises from 'fs/promises';
import os from 'os';
import path from 'path';
import {UserConfig} from '../types';

export const TOKEN_DICTIONARY = {
    token: 'token',
} as const;

type DictionaryKey = (typeof TOKEN_DICTIONARY)[keyof typeof TOKEN_DICTIONARY];

const weatherConfigPath = path.join(os.homedir(), '.weather-config.json');

async function isExist(path: string) {
    try {
        return await fsPromises.stat(path);
    } catch (error) {
        return false;
    }
}

export async function saveKeyValue(key: DictionaryKey, value: string | null) {
    let data: UserConfig = {};

    if (await isExist(weatherConfigPath)) {
        const file = await fsPromises.readFile(weatherConfigPath);

        data = JSON.parse(file.toString());
    }

    data[key] = value;

    await fsPromises.writeFile(weatherConfigPath, JSON.stringify(data));
}

export async function getKeyValue(key: DictionaryKey) {
    if ( await isExist(weatherConfigPath)) {
        const file = await fsPromises.readFile(weatherConfigPath);

        const data: UserConfig = JSON.parse(file.toString());

        return data[key];
    }

    return undefined;
}
