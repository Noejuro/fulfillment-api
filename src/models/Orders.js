import { Schema, model } from "mongoose";

const orderSchema = new Schema({
    products: {
        type: Array,
        required: true
    },
    items: {
        type: Number,
        required: true
    },
    warehouse: {
        type: String,
        required: true
    },
    store: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

export default model('Order', orderSchema);