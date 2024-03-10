import pool from '../../../../config/database/conectionDB.js'
import bcrypt from "bcryptjs";


const verifyUser = async (email, password) => {
    const sqlQuery = {
        text: "SELECT * FROM usuarios WHERE email= $1 AND password = $2",
        values: [email, password],
    }
    const { rows } = await pool.query(sqlQuery);
    console.log(rows);
    return rows[0];
    
}
const addUser = async ({ email, password, rol, lenguage }) =>{
    const passwordEncrypted = bcrypt.hashSync(password)
    
    const sqlQuery = {
        text: "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *",
        values: [email, passwordEncrypted, rol, lenguage]
    }
    try {
        const response = await pool.query(sqlQuery);
        return response.rows[0];
    } catch (err) {
        console.error(err.message)
    }

};
export { addUser, verifyUser };