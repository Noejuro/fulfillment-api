import Order from '../models/Orders'
import Stores from '../models/Stores';
import Warehouses from '../models/Warehouses';

export const createOrder = async (req,res) => {
    const { products, warehouse, store, client } = req.body

    const dataStore = await Stores.findById(store)

    const dataWarehouse = await Warehouses.findById(warehouse)

    const newOrder = new Order({products, warehouse: dataWarehouse.name, store: dataStore.name, client: client.name, items: products.length});

    const orderSaved = await newOrder.save()

    res.status(201).json(orderSaved)
}

export const getOrders = async (req,res) => {
    const orders = await Order.find();
    
    res.json(orders)
}