"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Jwt_1 = tslib_1.__importDefault(require("../commons/Jwt"));
class Auth extends Jwt_1.default {
    constructor() {
        super(...arguments);
        this.Login = (req, res, next) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            if (username == undefined || password == undefined) {
                return res.json({ code: -1, message: "Please check parameter" });
            }
            else {
                try {
                    var users = yield this.getOfDB((req.headers.database) + "", `select * from customer where username=$1 and password=SHA1($2) and flag='1'`, [username, password]);
                    if (users.length > 0) {
                        var user = users[0];
                        var token = this.getToken(user);
                        return res.json({ code: 1, message: 'ok', token: token });
                    }
                    else {
                        return res.send({ code: -1, message: "Invalid username or password" });
                    }
                }
                catch (e) {
                    return res.json(e);
                }
            }
        });
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.controller.js.map