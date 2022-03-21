import Product from '../models/Products'

import jwt from "jsonwebtoken";

export const createProduct = async (req,res) => {
    const { name, sku, price, quantity, img } = req.body
    const userId = getUserID(req)

    const newProduct = new Product({userId, name, sku, price, quantity, img});

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProducts = async (req,res) => {
    const userId = getUserID(req)

    const products = await Product.find({userId});
    res.json(products)
}

export const updateProduct = async (req,res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    });
    res.status(204).json(updatedProduct)
}

export const deleteProduct = async (req,res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json(deletedProduct)
}

const getUserID = (req) => {
    const token = req.headers["x-access-token"];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return decoded.id;
}