import { Router } from 'express'
import * as warehouseCtrl from '../controllers/warehouses.controller';
import { verifyToken } from '../middlewares';

const router = Router();

router.post('/create', verifyToken, warehouseCtrl.createWarehouse)

router.get('/', verifyToken, warehouseCtrl.getWarehouses)

export default router;