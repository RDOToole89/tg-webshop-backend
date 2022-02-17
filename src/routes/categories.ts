import { Router, Request, Response } from 'express';
import * as categories from '../data/categories.json';

const router = Router();

router.get('/categories', async (req: Request, res: Response) => {
  console.log('CATEGROIES IN ROUTER', categories);
  res.json(categories);
});

export { router };
