"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Jwt_1 = tslib_1.__importDefault(require("../commons/Jwt"));
class CheckLogin extends Jwt_1.default {
    constructor() {
        super(...arguments);
        this.Check = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = req.headers['x-access-token'] + "";
            try {
                const customer = yield this.getUser(token);
                const customers = yield this.getOfDB(req.headers.database + "", `select * from customer where customer_id=$1`, [customer.user.customer_id]);
                if (customers.length > 0) {
                    next();
                }
                else {
                    res.send({ code: -1, message: "Invalid User Login" });
                }
            }
            catch (e) {
                return res.json(e);
            }
        });
    }
}
exports.default = CheckLogin;
//# sourceMappingURL=CheckLogin.js.map