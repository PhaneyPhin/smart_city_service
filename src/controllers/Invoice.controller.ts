import Connection from '../connection/DBHelper';
import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
export default class Invoice extends Connection {
    public getInvoiceHistory = async (req: Request, res: Response, next: NextFunction) => {
        const { place_id, start_date, end_date } = req.body;
        if (place_id == undefined || start_date == undefined || end_date == undefined) {
            return res.json({ code: -1, message: "please check parameter" })
        } else {
            try {
                console.log(req.headers.customer_id)
                var invoices = await this.getOfDB(`select i.invoice_id from invoice_master i
                    inner join fee_master f on i.fee_id=f.fee_id
                    inner join customer_place cp on f.place_id=cp.place_id
                where cp.customer_id=$1`, [req.headers.customer_id]);
                // console.log(invoices);
                res.json(invoices);
            } catch (e) {
                res.json(e);
            }
        }
    }
}