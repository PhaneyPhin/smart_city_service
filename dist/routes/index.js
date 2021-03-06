"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const auth_route_1 = tslib_1.__importDefault(require("./auth.route"));
const Users_1 = tslib_1.__importDefault(require("./Users"));
const CheckLogin_1 = tslib_1.__importDefault(require("../middleware/CheckLogin"));
const Invoice_1 = tslib_1.__importDefault(require("./Invoice"));
const router = express_1.Router();
const checkLogin = new CheckLogin_1.default();
router.use("/auth", auth_route_1.default);
router.use('**', checkLogin.Check);
router.use('/users', Users_1.default);
router.use("/invoice", Invoice_1.default);
exports.default = router;
