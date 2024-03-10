import express from 'express';
import { loginUser, createUser } from '../../src/api/v1/controllers/loginController.js';
import { getDossier } from '../../middleware/dossierMidd.js';
import { verifyParamsLogin } from '../../middleware/loginMidd.js';
import { verifyParamsUser } from '../../middleware/userMidd.js';


export const router = express.Router();


router.post('/login', verifyParamsLogin, getDossier, loginUser);
router.post('/usuarios', verifyParamsUser, getDossier, createUser);


export default router;