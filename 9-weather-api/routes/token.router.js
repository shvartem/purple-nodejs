import express from 'express';
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from '../services/storage.service.js';
import {BadRequestError} from '../helpers/error.js';

const tokenRouter = express.Router();

tokenRouter.post('/', async (req, res) => {
    const {token} = req.body;

    try {
        if (!token?.length) {
            throw new BadRequestError('Не передан токен');
        }

        await saveKeyValue(TOKEN_DICTIONARY.token, token);

        res.status(201).json({token, success: true});
    } catch (error) {
        res.status(error.status ?? 500).json({errorMessage: error.message, success: false});
    }
});

tokenRouter.delete('/', async (req, res) => {
    const {token} = req.body;

    try {
        if (!token.length) {
            throw new BadRequestError('Не передан токен');
        }

        const existedToken = await getKeyValue(TOKEN_DICTIONARY.token);

        if (token !== existedToken) {
            throw new BadRequestError('Передан некорректный токен или не был ранее установлен');
        }

        await saveKeyValue(TOKEN_DICTIONARY.token, null);

        res.status(200).json({message: 'Токен удален', success: true});
    } catch (error) {
        res.status(error.status ?? 500).json({errorMessage: error.message, success: false});
    }
});

export {tokenRouter};
