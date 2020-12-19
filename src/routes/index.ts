import { Router } from 'express';
import TemplateRouter from './template';
import RenderRouter from './render';

// Init router and path
const router = Router();

router.use('/template', TemplateRouter);
router.use('/render', RenderRouter);

// Export the base-router
export default router;
