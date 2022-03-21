"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrders = exports.createOrder = void 0;

var _Orders = _interopRequireDefault(require("../models/Orders"));

var _Stores = _interopRequireDefault(require("../models/Stores"));

var _Warehouses = _interopRequireDefault(require("../models/Warehouses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createOrder = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, products, warehouse, store, client, dataStore, dataWarehouse, newOrder, orderSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, products = _req$body.products, warehouse = _req$body.warehouse, store = _req$body.store, client = _req$body.client;
            _context.next = 3;
            return _Stores["default"].findById(store);

          case 3:
            dataStore = _context.sent;
            _context.next = 6;
            return _Warehouses["default"].findById(warehouse);

          case 6:
            dataWarehouse = _context.sent;
            newOrder = new _Orders["default"]({
              products: products,
              warehouse: dataWarehouse.name,
              store: dataStore.name,
              client: client.name,
              items: products.length
            });
            _context.next = 10;
            return newOrder.save();

          case 10:
            orderSaved = _context.sent;
            res.status(201).json(orderSaved);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createOrder = createOrder;

var getOrders = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var orders;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Orders["default"].find();

          case 2:
            orders = _context2.sent;
            res.json(orders);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getOrders(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getOrders = getOrders;