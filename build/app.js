"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

require("dotenv/config");

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _products = _interopRequireDefault(require("./routes/products.routes"));

var _warehouses = _interopRequireDefault(require("./routes/warehouses.routes"));

var _stores = _interopRequireDefault(require("./routes/stores.routes"));

var _orders = _interopRequireDefault(require("./routes/orders.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.set('port', 4000);
app.set("pkg", _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  });
});
app.use('/api/auth', _auth["default"]);
app.use('/api/products', _products["default"]);
app.use('/api/warehouses', _warehouses["default"]);
app.use('/api/stores', _stores["default"]);
app.use('/api/orders', _orders["default"]);
var _default = app;
exports["default"] = _default;