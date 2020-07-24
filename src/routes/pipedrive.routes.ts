import { Router } from 'express';

const getAllDeals = require('../services/Pipedrive/getDeals');

const pipedriveRouter = Router();

pipedriveRouter.get('/deals', async (req, res) => {
  const allDeals = await getAllDeals();
  return res.json({ allDeals });
});

export default pipedriveRouter;
