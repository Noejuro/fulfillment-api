import { Router } from 'express'
const router = Router();

import { checkDuplicatedEmail } from '../middlewares';

import * as authCtrl from '../controllers/auth.controller'

router.post('/signup', checkDuplicatedEmail, authCtrl.signUp);
router.post('/login', authCtrl.login);

export default router;