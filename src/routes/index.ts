import { Router } from 'express';
import TemplateRouter from './template'

// Init router and path
const router = Router();

router.use('/template', TemplateRouter);

// Export the base-router
export default router;
