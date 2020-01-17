
import jwt from 'jsonwebtoken'
import Connection from '../connection/DBHelper';
var { JWT_SECRET, PREFIX_TOKEN } = process.env;
export default class Jwt extends Connection {
    public getToken = (user: object) => {
        var token = jwt.sign({ user }, JWT_SECRET + "");
        return PREFIX_TOKEN + token;
    }
    public getUser = (token: string) => {
        token = token.substr((PREFIX_TOKEN + "").length);
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SECRET + "", function (err, decoded) {
                if (err) reject({ code: -2, message: 'invalid user' });
                else {
                    resolve(decoded);
                }
            });
        })
    }
}