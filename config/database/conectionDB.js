import 'dotenv/config';
import pg from 'pg';

const pool = new pg.Pool({
    host: process.env.HOST, 
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    allowExitOnIdle: true

})

export default pool;
