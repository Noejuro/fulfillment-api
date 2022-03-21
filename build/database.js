"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect(process.env.DBURL).then(function (db) {
  return console.log('DB is connected');
})["catch"](function (error) {
  return console.log(error);
});