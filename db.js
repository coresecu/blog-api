import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AkflAkfldk!@34",
    database: "blog"
})