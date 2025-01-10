import bodyParser from 'body-parser';
import express from 'express';

import {tokenRouter} from './routes/token.router.js';
import {weatherRouter} from './routes/weather.router.js';

const PORT = 8000;

const app = express();

app.use(bodyParser.json());

app.use('/token', tokenRouter);

app.use('/weather', weatherRouter);

app.use((err, req, res, next) => {
    console.log({error: err.message});

    if (err) {
        res.status(err.status ?? 500).json({errorMessage: err.message, success: false});
    }

    next();
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
