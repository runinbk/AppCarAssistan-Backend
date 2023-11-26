"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../server/config"));
const user = config_1.default.DB_USERNAME || 'jwyjpayxggfxea';
const password = config_1.default.DB_PASSWORD || 'e2915dc6f998be73d3a1c40b7a4857a2a556162504017ad26c2881b819b4e0d1';
const host = config_1.default.DB_HOST || 'ec2-3-218-172-130.compute-1.amazonaws.com';
const port = config_1.default.DB_PORT || 5432;
const database = config_1.default.DB_DATABASE || 'd7adg1n2jf2rqt';
const typeDatabase = config_1.default.DB_CONNECTION || 'postgres';
const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;
console.log(url);
const options = {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
    // ssl: {
    //     rejectUnauthorized: false
    // }
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