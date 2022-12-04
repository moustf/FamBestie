import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { router } from './routes';

export const app = express();

app.use(compression());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

// Todo: change the port when you create the environment variables file.
app.set('port', process.env.PORT || 8080);

app.use('/api/v1', router);
