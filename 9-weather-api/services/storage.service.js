import fsPromises from 'fs/promises';
import os from 'os';
import path from 'path';

export const TOKEN_DICTIONARY = {
    token: 'token',
};

const weatherConfigPath = path.join(os.homedir(), '.weather-config.json');

async function isExist(path) {
    try {
        return await fsPromises.stat(path);
    } catch (error) {
        return false;
    }
}

export async function saveKeyValue(key, value) {
    let data = {};

    if (await isExist(weatherConfigPath)) {
        const file = await fsPromises.readFile(weatherConfigPath);

        data = JSON.parse(file);
    }

    data[key] = value;

    await fsPromises.writeFile(weatherConfigPath, JSON.stringify(data));
}

export async function getKeyValue(key) {
    if (isExist(weatherConfigPath)) {
        const file = await fsPromises.readFile(weatherConfigPath);

        const data = JSON.parse(file);

        return data[key];
    }

    return undefined;
}
