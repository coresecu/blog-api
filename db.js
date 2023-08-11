import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "svc.sel3.cloudtype.app",
    port: "30191",
    user: "root",
    password: "AkflAkfldk!@34",
    database: "blog"
})