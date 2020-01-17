import Connection from '../connection/DBHelper';
import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
export default class DashboardController extends Connection {
    public getChartOption = async (req: Request, res: Response, next: NextFunction) => {
        const { chart_type_id } = req.body;
        try {
            var charts: any = await this.getOfDB(`select * from chart_type where chart_type_id=$1`, [chart_type_id]);
            if (charts.length > 0) {
                return res.json({ ...this.success, chartOption: JSON.parse(charts[0].chart_type_option) })
            }
        } catch (e) {
            return res.json(e);
        }

    }
    public getChartType = async (req: Request, res: Response, next: NextFunction) => {
        try {
            var chart_titles: any = await this.getOfDB(`select chart_type_id,chart_type_name from chart_type`, []);
            console.log(111);
            return res.json({ ...this.success, data: chart_titles })
        } catch (e) {
            return res.json(e);
        }
    }
}