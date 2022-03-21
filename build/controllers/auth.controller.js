"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.login = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, company, email, phone, password, newUser, savedUser, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, company = _req$body.company, email = _req$body.email, phone = _req$body.phone, password = _req$body.password;
            _context.t0 = _User["default"];
            _context.t1 = name;
            _context.t2 = company;
            _context.t3 = email;
            _context.t4 = phone;
            _context.next = 8;
            return _User["default"].encryptPassword(password);

          case 8:
            _context.t5 = _context.sent;
            _context.t6 = {
              name: _context.t1,
              company: _context.t2,
              email: _context.t3,
              phone: _context.t4,
              password: _context.t5
            };
            newUser = new _context.t0(_context.t6);
            _context.next = 13;
            return newUser.save();

          case 13:
            savedUser = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRES_IN // 24 Hours

            });
            res.status(200).json({
              token: token
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Invalid Credentials"
            }));

          case 5:
            _context2.next = 7;
            return _User["default"].comparePassword(req.body.password, userFound.password);

          case 7:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Invalid Credentials"
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, process.env.JWT_SECRET, {
              expiresIn: process.env.JWT_EXPIRES_IN
            });
            res.json({
              token: token
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;