import { Router, Request, Response } from 'express';
import * as categories from '../data/categories.json';

const router = Router();

router.get('/categories', async (req: Request, res: Response) => {
  res.json(categories);
});

export { router };
