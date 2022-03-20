import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    sku: String,
    price: Number,
    quantity: Number,
    img: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema);