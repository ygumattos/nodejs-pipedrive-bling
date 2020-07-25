import { Router } from 'express';

import WonDealsService from '../services/getWonDealsServices';
import ConsolidatedPipedriveBlingService from '../services/consolidatedPipedriveBlingService';

const getProductsDeal = require('../providers/Pipedrive/getListProductsForDeal');
const getParticipantsDeal = require('../providers/Pipedrive/getListParticipantsOfDeal');
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

pipedriveRouter.get('/deal/participants/:id', async (req, res) => {
  const { id } = req.params;
  const DetailDeal = await getParticipantsDeal(id);
  return res.json(DetailDeal);
});

pipedriveRouter.get('/wondeals', async (req, res) => {
  const getDeals = new WonDealsService();
  const wonDeals = await getDeals.execute();

  res.json(wonDeals);
});

pipedriveRouter.get('/deals/consolidated', async (req, res) => {
  // from pipedrive to bling
  const getConsolidedDealService = new ConsolidatedPipedriveBlingService();
  const consolidedDeals = await getConsolidedDealService.execute();

  res.json(consolidedDeals);
});

export default pipedriveRouter;
