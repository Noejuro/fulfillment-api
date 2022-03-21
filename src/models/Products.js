import { Schema, model } from "mongoose";

const productSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    img: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Product', productSchema);