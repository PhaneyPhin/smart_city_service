"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const Auth_controller_1 = tslib_1.__importDefault(require("../controllers/Auth.controller"));
const router = express_1.Router();
const auth = new Auth_controller_1.default();
router.post('/login', auth.Login);
exports.default = router;
