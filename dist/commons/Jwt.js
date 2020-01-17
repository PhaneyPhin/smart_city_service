"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const DBHelper_1 = tslib_1.__importDefault(require("../connection/DBHelper"));
var { JWT_SECRET, PREFIX_TOKEN } = process.env;
class Jwt extends DBHelper_1.default {
    constructor() {
        super(...arguments);
        this.getToken = (user) => {
            var token = jsonwebtoken_1.default.sign({ user }, JWT_SECRET + "");
            return PREFIX_TOKEN + token;
        };
        this.getUser = (token) => {
            token = token.substr((PREFIX_TOKEN + "").length);
            return new Promise((resolve, reject) => {
                jsonwebtoken_1.default.verify(token, JWT_SECRET + "", function (err, decoded) {
                    if (err)
                        reject({ code: -2, message: 'invalid user' });
                    else {
                        resolve(decoded);
                    }
                });
            });
        };
    }
}
exports.default = Jwt;
