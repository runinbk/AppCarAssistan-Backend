import { Options, Sequelize } from "sequelize";

import config from "../server/config";

const user = config.DB_USERNAME || 'ajjvjwhvkxvkcb';
const password = config.DB_PASSWORD || '6b960eb7a069a09d0924fd5343c3fe985c2f6dc08b3466c5c4633cfac6222484';
const host = config.DB_HOST || 'ec2-44-213-228-107.compute-1.amazonaws.com';
const port = config.DB_PORT || 5432;
const database = config.DB_DATABASE || 'd1rdg8s7hn1n8k';
const typeDatabase = config.DB_CONNECTION || 'postgres';


const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;
// const url = config.DATABASE_URL || "";

// console.log(url);

const options: Options = {
    dialect: 'postgres', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql'
    logging: false, // false
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
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