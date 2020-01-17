"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const User_controller_1 = tslib_1.__importDefault(require("../controllers/User.controller"));
const router = express_1.Router();
const user = new User_controller_1.default();
router.post("/getUser", user.getUser);
exports.default = router;
