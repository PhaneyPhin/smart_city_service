"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const DBHelper_1 = tslib_1.__importDefault(require("../connection/DBHelper"));
class User extends DBHelper_1.default {
    constructor() {
        super(...arguments);
        this.getUser = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const custmers = yield this.getOfDB(req.headers.database + "", `select * from customer`, []);
                res.json(custmers);
            }
            catch (e) {
                res.send(e);
            }
        });
    }
}
exports.default = User;
//# sourceMappingURL=User.controller.js.map