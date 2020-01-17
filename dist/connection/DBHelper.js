"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;
class Connection {
    constructor() {
        this.getOfDB = (database, sql, data) => {
            var pool = new pg_1.Pool({
                user: DB_USERNAME,
                host: DB_HOST,
                database: database,
                password: DB_PASSWORD,
                port: Number(DB_PORT),
            });
            return new Promise((resolve, reject) => {
                pool.query(sql, data).then((result) => {
                    resolve(result.rows);
                }, err => {
                    reject({ code: err.code, message: err.stack });
                });
            });
        };
        this.execute = (database, sql, data) => {
            var pool = new pg_1.Pool({
                user: DB_USERNAME,
                host: DB_HOST,
                database: database,
                password: DB_PASSWORD,
                port: Number(DB_PORT),
            });
            return new Promise((resolve, reject) => {
                pool.query(sql, data).then((result) => {
                    resolve(result);
                }, err => {
                    reject({ code: err.code, message: err.stack });
                });
            });
        };
    }
}
exports.default = Connection;
