"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _bem = _interopRequireDefault(require("./bem"));

var _sfc = _interopRequireDefault(require("./sfc"));

var _i18n = _interopRequireDefault(require("./i18n"));

function _default(name) {
  name = 'van-' + name;
  return [(0, _sfc.default)(name), (0, _bem.default)(name), (0, _i18n.default)(name)];
}