import { Router } from 'express';
import UserRouter from './Users';
import TemplateRouter from './template'

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/template', TemplateRouter);

// Export the base-router
export default router;
