/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import {
  createHandler,
  getAllHandler,
  getOneHandler,
  editHandler,
  deleteHandler
} from './handler'

const router = Router();

router.post('/', createHandler);
router.get('/', getAllHandler);
router.get('/:id', getOneHandler);
router.post('/:id', editHandler);
router.delete('/:id', deleteHandler);

export default router;