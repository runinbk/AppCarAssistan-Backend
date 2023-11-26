import { Options, Sequelize } from "sequelize";

import config from "../server/config";

const user = config.DB_USERNAME || 'jwyjpayxggfxea';
const password = config.DB_PASSWORD || 'e2915dc6f998be73d3a1c40b7a4857a2a556162504017ad26c2881b819b4e0d1';
const host = config.DB_HOST || 'ec2-3-218-172-130.compute-1.amazonaws.com';
const port = config.DB_PORT || 5432;
const database = config.DB_DATABASE || 'd7adg1n2jf2rqt';
const typeDatabase = config.DB_CONNECTION || 'postgres';


const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;

console.log(url);

const options: Options = {
    dialect: 'postgres', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql'
    logging: false, // false
    dialectOptions: {
        // ssl: {
        //     rejectUnauthorized: false
        // }
    }
};

const sequelizeConnection = new Sequelize(url, options);
export default sequelizeConnection;

// import { Sequelize } from "sequelize";


// //     PARA EL LOCALHOST
// const db = new Sequelize('content-create-db', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: "postgres",
// })

// export default db;