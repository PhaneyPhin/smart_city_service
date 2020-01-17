
import { logger } from '@shared';
import { Request, Response, Router, Express } from 'express';
// import Auth from '../controllers/Auth.controller';
import DashboardController from '../controllers/Dashboard.controller';

// Init shared
const router = Router();
const dashboard = new DashboardController();
router.post("/getchart_type", dashboard.getChartType);
router.post("/getchart_option", dashboard.getChartOption);


export default router;
