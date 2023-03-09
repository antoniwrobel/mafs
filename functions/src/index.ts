import * as functions from 'firebase-functions';
import * as express from 'express';

import { test } from './API/test';

const app = express();

app.get('/test', test);

export const server = functions.https.onRequest(app);
