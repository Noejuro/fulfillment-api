"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStores = exports.createStore = void 0;

var _Stores = _interopRequireDefault(require("../models/Stores"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createStore = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, img, newStore, storeSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, img = _req$body.img;
            newStore = new _Stores["default"]({
              name: name,
              img: img
            });
            _context.next = 4;
            return newStore.save();

          case 4:
            storeSaved = _context.sent;
            res.status(201).json(storeSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createStore(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createStore = createStore;

var getStores = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var stores;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Stores["default"].find();

          case 2:
            stores = _context2.sent;
            res.json(stores);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getStores(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getStores = getStores;