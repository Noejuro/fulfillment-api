"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWarehouses = exports.createWarehouse = void 0;

var _Warehouses = _interopRequireDefault(require("../models/Warehouses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createWarehouse = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, location, phone, capacity, newWarehouse, warehouseSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, location = _req$body.location, phone = _req$body.phone, capacity = _req$body.capacity;
            newWarehouse = new _Warehouses["default"]({
              name: name,
              email: email,
              location: location,
              phone: phone,
              capacity: capacity
            });
            _context.next = 4;
            return newWarehouse.save();

          case 4:
            warehouseSaved = _context.sent;
            res.status(201).json(warehouseSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createWarehouse(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createWarehouse = createWarehouse;

var getWarehouses = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var warehouses;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Warehouses["default"].find();

          case 2:
            warehouses = _context2.sent;
            res.json(warehouses);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getWarehouses(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getWarehouses = getWarehouses;