import express, { Request, Response } from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { join } from 'path';

import { router } from './routes';
import { notFoundController } from './controllers/error_handling/404';
import { serverErrorController } from './controllers/error_handling/500';
import { baseConfig } from './config/environments';

const { nodeEnv } = baseConfig;

export const app = express();

app.use(compression());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.set('port', process.env.PORT || 8080);

app.use('/api/v1', router);

if (nodeEnv === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.use('*', (req: Request, res: Response) => (
    res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html'))));
}

app.use(notFoundController);
app.use(serverErrorController);
