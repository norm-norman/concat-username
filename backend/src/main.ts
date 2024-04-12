import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

import { handleInputValidation } from './utils/handleInputValidation';
import { parseRequestQuery } from './utils/parseRequestQuery';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

app.get('/validate', function (req: Request, res: Response) {
  const { valid, errors } = handleInputValidation(parseRequestQuery(req));
  res.send({ valid: valid, errors: errors });
});

app.get('/generate', (req: Request, res: Response) => {
  const formData = parseRequestQuery(req);
  res.send('generating');
});

app.listen(port, () => {
  console.log(`[server] server is on: http://localhost:${port}`);
});
