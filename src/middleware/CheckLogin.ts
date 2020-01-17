import Jwt from '../commons/Jwt';
import { Request, Response, NextFunction } from 'express';
export default class CheckLogin extends Jwt {
    public Check = async (req: Request, res: Response, next: NextFunction) => {
        const token: string = req.headers['x-access-token'] + "";
        try {
            const customer: any = await this.getUser(token);
            const customers: any = await this.getOfDB(`select * from customer where customer_id=$1`, [customer.user.customer_id]);
            if (customers.length > 0) {
                next();
            } else {
                res.send({ code: -1, message: "Invalid User Login" })
            }
        } catch (e) {
            return res.json(e);
        }
    }
}