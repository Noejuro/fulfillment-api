import { Router } from 'express'
import * as productsCtrl from '../controllers/products.controller';

const router = Router();

router.post('/create', productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.put('/:productId', productsCtrl.updateProduct)

router.delete('/:productId', productsCtrl.deleteProduct)

export default router;