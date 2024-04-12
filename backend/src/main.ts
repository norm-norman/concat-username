import express, { Express, Request, Response, Application } from 'express';

const app: Application = express();
const port = 8080;

app.get('/validate', (req: Request, res: Response) => {
  res.send('validating');
});

app.get('/generate', (req: Request, res: Response) => {
  res.send('generating');
});

app.listen(port, () => {
  console.log(`server is on: http://localhost:${port}`);
});
