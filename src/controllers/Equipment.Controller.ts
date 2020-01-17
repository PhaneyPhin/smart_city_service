import Connection from '../connection/DBHelper';
import { Request, Response, NextFunction } from 'express';
export default class EquipmentController extends Connection {
    public getEquipment = async (req: Request, res: Response, next: NextFunction) => {
        try {
            var equipments = await this.getOfDB(`select e.*,d.lat,d.lon,d.device_icon from device_group dg 
                    inner join device_master d on d.device_group_id=dg.device_group_id
                    inner join equipment_master e on e.device_id=d.device_id
                    inner join equipment_type et on e.equiment_type_id=et.equipment_type_id`, []);
            return res.json({ ...this.success, data: equipments });
        } catch (e) {
            return res.json(e);
        }
    }
    public getFieldEquipment = async (req: Request, res: Response, next: NextFunction) => {

        const { equipment_id } = req.body;
        try {
            var sql = `SELECT column_name
                    FROM information_schema.columns
                    WHERE table_schema = 'public'
                    AND table_name   = 'data_${equipment_id}'
                        ;`
            console.log(sql);

            var column = await this.getOfDB(sql, [])
            return res.json({ ...this.success, data: column })
        } catch (e) {
            return res.json(e);
        }
    }


}