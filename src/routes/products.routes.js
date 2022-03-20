import { Router } from 'express'
import * as productsCtrl from '../controllers/products.controller';
import { verifyToken } from '../middlewares';

const router = Router();

router.post('/create', verifyToken, productsCtrl.createProduct)

router.get('/', verifyToken, productsCtrl.getProducts)

router.put('/:productId', verifyToken, productsCtrl.updateProduct)

router.delete('/:productId', verifyToken, productsCtrl.deleteProduct)

export default router;