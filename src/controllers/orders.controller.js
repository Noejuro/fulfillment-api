import Order from '../models/Orders'
import Stores from '../models/Stores';
import Warehouses from '../models/Warehouses';

import jwt from "jsonwebtoken";

export const createOrder = async (req,res) => {
    const { products, warehouse, store, client } = req.body

    const dataStore = await Stores.findById(store)

    const dataWarehouse = await Warehouses.findById(warehouse)

    const userId = getUserID(req)

    const newOrder = new Order({userId, products, warehouse: dataWarehouse.name, store: dataStore.name, client: client.name, items: products.length});

    const orderSaved = await newOrder.save()

    res.status(201).json(orderSaved)
}

export const getOrders = async (req,res) => {
    const userId = getUserID(req)

    const orders = await Order.find({userId});
    
    res.json(orders)
}

const getUserID = (req) => {
    const token = req.headers["x-access-token"];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded.id;
}