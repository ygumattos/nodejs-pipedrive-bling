import { Router } from 'express';

import pipedriveRouter from './pipedrive.routes';

const routes = Router();

routes.use('/pipedrive', pipedriveRouter);

export default routes;
