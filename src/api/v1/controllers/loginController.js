import jwt from 'jsonwebtoken';
import { findErr } from '../utils/utils.js';
import bcrypt from "bcryptjs";

import { verifyUser, addUser } from '../model/model.js';

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(`body ${req.body}`);
    try {
        const user = await verifyUser(email, password);
        if(!user){
            const searchErr = findErr("auth_01")
            return res.status(400).json({ error: searchErr[0].message });
        }
        const isEqual = bcrypt.compareSync(password, user.password);
        if(!isEqual){
            const searchErr = findErr("auth_02")
            return res.status(400).json({  error: searchErr[0].message });
        }
        
        const token = jwt.sign(user.email, process.env.JWT_SECRET, { expiresIn: 120 })
        return res.status(200).json({
            message: `Ingreso Exitoso, email: ${email}`,
            code: 200,
            token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({error: err.message})
    }
}

const createUser = async (req, res) => {
    const user = req.body;
    console.log(req.body);
    try {
        const newUser = await addUser(user);
        res.status(201).json({ user: newUser });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export { loginUser, createUser };