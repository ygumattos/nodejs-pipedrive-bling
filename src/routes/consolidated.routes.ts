import { Router } from 'express';

import ConsolidatedService from '../services/createConsolidatedService';
import ConsolidatedRepository from '../repositories/ConsolidatedRepository';

const consolidatedRouter = Router();

consolidatedRouter.get('/', async (req, res) => {
  const consolidatedService = new ConsolidatedService();
  await consolidatedService.execute();

  return res
    .status(201)
    .json({ message: 'Get data from Bling and insert into DataBase' });
});

consolidatedRouter.post('/', async (req, res) => {
  const { date } = req.body;
  const consolidatedRepository = new ConsolidatedRepository();
  const findConsolidated = await consolidatedRepository.findByDate(date);

  return res.json(findConsolidated);
});

export default consolidatedRouter;
