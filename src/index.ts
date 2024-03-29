import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { router as loginRouter } from './routes/loginRoutesTest';
import { router as productsRouter } from './routes/products';
import { router as categoriesRouter } from './routes/categories';

import cookieSession from 'cookie-session';
import cors from 'cors';

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['abcde'] }));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome');
});

// Routers
app.use(loginRouter);
app.use(productsRouter);
app.use(categoriesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}...`);
});
