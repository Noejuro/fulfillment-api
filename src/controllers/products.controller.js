import Product from '../models/Products'

export const createProduct = async (req,res) => {
    const { name, sku, price, quantity, img } = req.body

    const newProduct = new Product({name, sku, price, quantity, img});

    const productSaved = await newProduct.save()

    res.status(201).json(productSaved)
}

export const getProducts = async (req,res) => {
    const products = await Product.find();
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