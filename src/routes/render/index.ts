/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { fromId, fromName } from './handler';

const router = Router();

router.post('/:id', fromId);
router.post('/name/:name', fromName);

export default router;