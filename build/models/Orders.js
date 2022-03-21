"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var orderSchema = new _mongoose.Schema({
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
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Order', orderSchema);

exports["default"] = _default;