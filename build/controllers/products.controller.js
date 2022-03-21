"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProducts = exports.deleteProduct = exports.createProduct = void 0;

var _Products = _interopRequireDefault(require("../models/Products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createProduct = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, sku, price, quantity, img, newProduct, productSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, sku = _req$body.sku, price = _req$body.price, quantity = _req$body.quantity, img = _req$body.img;
            newProduct = new _Products["default"]({
              name: name,
              sku: sku,
              price: price,
              quantity: quantity,
              img: img
            });
            _context.next = 4;
            return newProduct.save();

          case 4:
            productSaved = _context.sent;
            res.status(201).json(productSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createProduct = createProduct;

var getProducts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var products;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Products["default"].find();

          case 2:
            products = _context2.sent;
            res.json(products);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var updateProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var updatedProduct;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Products["default"].findByIdAndUpdate(req.params.productId, req.body, {
              "new": true
            });

          case 2:
            updatedProduct = _context3.sent;
            res.status(204).json(updatedProduct);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateProduct = updateProduct;

var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var deletedProduct;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Products["default"].findByIdAndDelete(req.params.productId);

          case 2:
            deletedProduct = _context4.sent;
            res.status(204).json(deletedProduct);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteProduct = deleteProduct;