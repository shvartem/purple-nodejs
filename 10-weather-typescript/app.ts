import bodyParser from 'body-parser';
import express, {NextFunction, Request, Response} from 'express';

import {tokenRouter} from './routes/token.router';
import {weatherRouter} from './routes/weather.router';
import {BadRequestError} from './helpers/error';

const PORT = 8000;

const app = express();

app.use(bodyParser.json());

app.use('/token', tokenRouter);

app.use('/weather', weatherRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof BadRequestError) {
        res.status(err.status).json({errorMessage: err.message, success: false});
    }

    if (err instanceof Error) {
        res.status(500).json({errorMessage: err.message, success: false});
    }

    next();
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
