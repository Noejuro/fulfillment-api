import { Schema, model } from "mongoose";

const warehouseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

export default model('Warehouse', warehouseSchema);