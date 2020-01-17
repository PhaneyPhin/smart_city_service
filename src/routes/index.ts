import { Router } from 'express';
import AuthRouter from './auth.route'
import UserRouter from './Users';
import DasboardRouter from './dashboard.route';
import CheckLogin from '../middleware/CheckLogin';
import InvoiceRouter from './Invoice';
import EquipmentRouter from './equipment.route';
// Init router and path
const router = Router();
const checkLogin = new CheckLogin();
// Add sub-routes
router.use("/auth", AuthRouter);
router.use("/dashboard", DasboardRouter);
router.use('/equipment', EquipmentRouter);
// router.use('**', checkLogin.Check);
router.use('/users', UserRouter);
router.use("/invoice", InvoiceRouter);

// Export the base-router
export default router;
