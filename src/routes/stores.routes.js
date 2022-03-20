import { Router } from 'express'
import * as storeCtrl from '../controllers/stores.controller';
import { verifyToken } from '../middlewares';

const router = Router();

router.post('/create', verifyToken, storeCtrl.createStore)

router.get('/', verifyToken, storeCtrl.getStores)

export default router;