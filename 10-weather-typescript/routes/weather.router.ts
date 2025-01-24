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

        const data = await getWeather({city: city.toString(), token});

        const result = parseWeather(data);

        res.json({data: result, success: true});
    } catch (error) {
        if (error instanceof BadRequestError) {
            res.status(error.status).json({errorMessage: error.message, success: false});
        }

        if (error instanceof Error) {
            res.status(500).json({errorMessage: error.message, success: false});
        }
    }
});

export {weatherRouter};
