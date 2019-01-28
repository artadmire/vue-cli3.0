"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _default;

var _sfc = _interopRequireDefault(require("./use/sfc"));

var _bem = _interopRequireDefault(require("./use/bem"));

var _i18n = _interopRequireDefault(require("../mixins/i18n"));

var _ = require(".");

/**
 * Create a basic component with common options
 */
function _default(sfc) {
  sfc = (0, _sfc.default)('van-' + sfc.name)(sfc);
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(_i18n.default);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = _.isDef;
  sfc.methods.b = (0, _bem.default)(sfc.name);
  return sfc;
}