import jwt from 'jsonwebtoken';

import { verifyUser } from '../model/model.js';

const getUser = async (req, res) => {
    try {
    const Authorization = req.header("Authorization")
    const token = Authorization.split("Bearer ")[1];
        if(jwt.verify(token, process.env.JWT_SECRET)){
            const { email } = jwt.decode(token)
            const user = await verifyUser(email, password)
            res.status(200).json([user])
            console.log(token)
        }
    } catch (err) {
    res.status(500).json({error: err.message})
    }
};



export { getUser };