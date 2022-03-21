"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var warehouseSchema = new _mongoose.Schema({
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
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Warehouse', warehouseSchema);

exports["default"] = _default;