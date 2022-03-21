import { Router } from 'express'
import * as orderCtrl from '../controllers/orders.controller';
import { verifyToken } from '../middlewares';

const router = Router();

router.post('/create', verifyToken, orderCtrl.createOrder)

router.get('/', verifyToken, orderCtrl.getOrders)

export default router;