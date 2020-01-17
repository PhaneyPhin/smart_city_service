import Connection from '../connection/DBHelper';
import { Request, NextFunction, Response } from 'express';
import Jwt from '../commons/Jwt';

export default class Auth extends Jwt {
    /**
     * Function Login @param {username,password}
     */
    public Login = async (req: Request, res: Response, next: NextFunction) => {
        const { username, password } = req.body;
        if (username == undefined || password == undefined) {
            return res.json({ code: -1, message: "Please check parameter" })
        } else {
            try {
                var users: any = await this.getOfDB(`select * from user_master where username=$1 and password=SHA1($2) and flag='1'`, [username, password]);
                if (users.length > 0) {
                    var user = users[0];
                    var token = this.getToken(user);

                    return res.json({ code: 1, message: 'ok', token: token });
                } else {
                    return res.send({ code: -1, message: "Invalid username or password" })
                }
            } catch (e) {
                return res.json(e)
            }

        }
    }
}