"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../server/config"));
const user = config_1.default.DB_USERNAME || 'ajjvjwhvkxvkcb';
const password = config_1.default.DB_PASSWORD || '6b960eb7a069a09d0924fd5343c3fe985c2f6dc08b3466c5c4633cfac6222484';
const host = config_1.default.DB_HOST || 'ec2-44-213-228-107.compute-1.amazonaws.com';
const port = config_1.default.DB_PORT || 5432;
const database = config_1.default.DB_DATABASE || 'd1rdg8s7hn1n8k';
const typeDatabase = config_1.default.DB_CONNECTION || 'postgres';
const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;
// const url = config.DATABASE_URL || "";
// console.log(url);
const options = {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
};
const sequelizeConnection = new sequelize_1.Sequelize(url, options);
exports.default = sequelizeConnection;
// import { Sequelize } from "sequelize";
// //     PARA EL LOCALHOST
// const db = new Sequelize('content-create-db', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: "postgres",
// })
// export default db;
//# sourceMappingURL=connection.js.map