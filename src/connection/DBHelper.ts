// const Pool = require('pg').Pool;
import { Pool } from 'pg';
const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;
export default class Connection {
    public getOfDB = (sql: string, data: any) => {
        var pool = new Pool({
            user: DB_USERNAME,
            host: DB_HOST,
            database: DB_NAME,
            password: DB_PASSWORD,
            port: Number(DB_PORT),
        });
        return new Promise((resolve, reject) => {
            pool.query(sql, data).then((result) => {
                resolve(result.rows);
            }, err => {
                reject({ code: err.code, message: err.stack })
            })
        })
    }
    public execute = (sql: string, data: any) => {
        var pool = new Pool({
            user: DB_USERNAME,
            host: DB_HOST,
            database: DB_NAME,
            password: DB_PASSWORD,
            port: Number(DB_PORT),
        });
        return new Promise((resolve, reject) => {
            pool.query(sql, data).then((result) => {
                resolve(result);
            }, err => {
                reject({ code: err.code, message: err.stack })
            })
        })
    }
    public success = { code: 1, message: 'ok' }
}

