"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var storeSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Store', storeSchema);

exports["default"] = _default;