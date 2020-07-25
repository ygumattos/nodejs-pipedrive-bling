import { Router } from 'express';

import ConsolidatedService from '../services/createConsolidatedService';

const consolidatedRouter = Router();

consolidatedRouter.get('/', async (req, res) => {
  const consolidatedService = new ConsolidatedService();
  await consolidatedService.execute();

  return res
    .status(201)
    .json({ message: 'Get data from Bling and insert into DataBase' });
});

export default consolidatedRouter;
