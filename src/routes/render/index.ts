/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { fromId, fromName } from './handler';

const router = Router();

router.post('/name/:name', fromName);
router.post('/:id', fromId);

export default router;