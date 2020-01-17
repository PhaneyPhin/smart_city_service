import { Router } from 'express';
import Invoice from '../controllers/Invoice.controller';

// Init shared
const router = Router();
const invoice = new Invoice();
router.post("/getInvoice", invoice.getInvoiceHistory);

export default router;
