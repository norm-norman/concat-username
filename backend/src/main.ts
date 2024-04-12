import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { handleInputValidation } from './utils/handleInputValidation';
import { handleUsernameGeneration } from './utils/handleUsernameGeneration';
import { parseRequestQuery } from './utils/parseRequestQuery';

// setup .env file
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());

// validate endpoint
app.get('/validate', function (req: Request, res: Response) {
  const { valid, errors } = handleInputValidation(parseRequestQuery(req));
  res.send({ valid: valid, errors: errors });
});

// generate endpoint
app.get('/generate', (req: Request, res: Response) => {
  const username = handleUsernameGeneration(parseRequestQuery(req));
  res.send({ username: username });
});

app.listen(port, () => {
  console.log(`[server] server is on: http://localhost:${port}`);
});
