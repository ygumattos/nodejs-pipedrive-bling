import { Router } from 'express';

import WonDealsService from '../services/getWonDealsServices';

const getAllDeals = require('../providers/Pipedrive/getDeals');

const pipedriveRouter = Router();

pipedriveRouter.get('/deals', async (req, res) => {
  const allDeals = await getAllDeals();
  return res.json({ allDeals });
});

pipedriveRouter.get('/wondeals', async (req, res) => {
  const getDeals = new WonDealsService();
  const wonDeals = await getDeals.execute();

  res.json({ wonDeals });
});

export default pipedriveRouter;
