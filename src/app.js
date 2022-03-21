import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import 'dotenv/config';

import authRoutes from "./routes/auth.routes";
import productsRoutes from "./routes/products.routes";
import warehouseRoutes from './routes/warehouses.routes'
import storeRoutes from './routes/stores.routes'
import orderRoutes from './routes/orders.routes'

const app = express();
app.set('port', 4000);

app.set("pkg", pkg)

app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: app.get("pkg").name,
        author: app.get("pkg").author,
        description: app.get("pkg").description,
        version: app.get("pkg").version
    })
})

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/warehouses', warehouseRoutes);
app.use('/api/stores', storeRoutes);
app.use('/api/orders', orderRoutes);

export default app;

