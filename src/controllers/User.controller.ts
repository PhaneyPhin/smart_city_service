import Connection from '../connection/DBHelper';
import { Request, Response, NextFunction } from 'express';
export default class User extends Connection {
    public getUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const custmers: any = await this.getOfDB(`select * from customer`, []);
            res.json(custmers);
        } catch (e) {
            res.send(e);
        }
    }
}