import mysql from 'mysql';
import 'dotenv/config'
export const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    port:process.env.DBPORT
})

