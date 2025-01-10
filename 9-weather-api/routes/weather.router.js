import express from 'express';
import {BadRequestError} from '../helpers/error.js';
import {getWeather} from '../services/api.service.js';
import {getKeyValue, TOKEN_DICTIONARY} from '../services/storage.service.js';
import {parseWeather} from '../helpers/parse.js';

const weatherRouter = express.Router();

weatherRouter.get('/', async (req, res) => {
    const {city} = req.query;

    try {
        if (!city?.length) {
            throw new BadRequestError('Не передан город');
        }

        const token = await getKeyValue(TOKEN_DICTIONARY.token);

        if (!token?.length) {
            throw new BadRequestError('Не установлен токен');
        }

        const data = await getWeather({city, token});

        const result = parseWeather(data);

        res.json({data: result, success: true});
    } catch (error) {
        res.status(error.status ?? 500).json({errorMessage: error.message, success: false});
    }
});

export {weatherRouter};
