import { Router, Request, Response } from 'express';
import * as products from '../data/products.json';

const router = Router();

router.get('/products', async (req: Request, res: Response) => {
  res.json(products);
});

export { router };
