import express from 'express'
import {  getUser } from '../../src/api/v1/controllers/usersController.js'
import { authorizationMidd } from '../../middleware/authMidd.js'
import { getDossier } from '../../middleware/dossierMidd.js';

export const router = express.Router();

router.get('/usuarios', authorizationMidd, getDossier, getUser)



export default router;