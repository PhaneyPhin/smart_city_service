import Connection from '../connection/DBHelper';
import { Request, Response, NextFunction } from 'express';
import moment from 'moment';

export default class DashboardController extends Connection {
    public getChartOption = async (req: Request, res: Response, next: NextFunction) => {
        const { chart_type_id,chart_name,series } = req.body;
        console.log(req.body);
        
        try {
            var charts: any = await this.getOfDB(`select * from chart_type where chart_type_id=$1`, [chart_type_id]);
            console.log(charts);
            if (charts.length > 0) {
                var option=JSON.parse(charts[0].chart_type_option);
             
                if(option.chart==undefined){
                    option.chart={};
                }
                option.chart.title=chart_name;
                option.series=[];
                // console.log(option)
                
                series.forEach(async (item:any)=>{
                    var {column_name,equipment}=item;
                    var serieData:any=await this.getOfDB(`select date,${column_name} as column from data_${equipment} `,[]);
                    option.series.push({
                        name:column_name,
                        data:serieData.map(({date,column}:any)=>[new Date(date).getTime(),column])
                    })
                })

                return res.json({ ...this.success, chartOption: option })
            }else{
                return res.json({code:-1,messsage:'no data'})
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