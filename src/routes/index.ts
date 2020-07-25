import { Router } from 'express';

import pipedriveRouter from './pipedrive.routes';
import consolidatedRouter from './consolidated.routes';

const routes = Router();

routes.use('/pipedrive', pipedriveRouter);
routes.use('/consolidated', consolidatedRouter);

export default routes;
