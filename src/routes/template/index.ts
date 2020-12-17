import { Router } from 'express';
import { getAll } from './handler'

const router = Router();

router.get('/', getAll)

export default router;