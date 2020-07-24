import { Router } from 'express';

import WonDealsService from '../services/getWonDealsServices';

const getProductsDeal = require('../providers/Pipedrive/getListProductsForDeal');
const getAllDeals = require('../providers/Pipedrive/getDeals');

const pipedriveRouter = Router();

pipedriveRouter.get('/deals', async (req, res) => {
  const allDeals = await getAllDeals();
  return res.json(allDeals);
});

pipedriveRouter.get('/deal/products/:id', async (req, res) => {
  const { id } = req.params;
  const DetailDeal = await getProductsDeal(id);
  return res.json(DetailDeal);
});

pipedriveRouter.get('/wondeals', async (req, res) => {
  const getDeals = new WonDealsService();
  const wonDeals = await getDeals.execute();

  res.json(wonDeals);
});

export default pipedriveRouter;
