import Warehouse from '../models/Warehouses'

export const createWarehouse = async (req,res) => {
    const { name, email, location, phone, capacity } = req.body

    const newWarehouse = new Warehouse({name, email, location, phone, capacity});

    const warehouseSaved = await newWarehouse.save()

    res.status(201).json(warehouseSaved)
}

export const getWarehouses = async (req,res) => {
    const warehouses = await Warehouse.find();
    res.json(warehouses)
}