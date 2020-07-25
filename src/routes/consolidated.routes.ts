import { Router } from 'express';

import ConsolidatedService from '../services/createConsolidatedService';

const consolidatedRouter = Router();

consolidatedRouter.get('/', async (req, res) => {
  const consolidatedService = new ConsolidatedService();
  const consolidated = consolidatedService.execute();

  return res.json(consolidated);
});

export default consolidatedRouter;
