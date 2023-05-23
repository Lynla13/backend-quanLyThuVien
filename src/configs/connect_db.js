import mysql from 'mysql2';

const pool = mysql.createPool({
       host: 'localhost',
       user: 'root',
       database: 'quanlythuvientruong',
})

export default pool;

// host: 'localhost',
// user: 'root',
// database: 'nodejs-basic',
//haha