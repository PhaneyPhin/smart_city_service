"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const Invoice_controller_1 = tslib_1.__importDefault(require("../controllers/Invoice.controller"));
const router = express_1.Router();
const invoice = new Invoice_controller_1.default();
router.post("/getInvoice", invoice.getInvoiceHistory);
exports.default = router;
//# sourceMappingURL=Invoice.js.map