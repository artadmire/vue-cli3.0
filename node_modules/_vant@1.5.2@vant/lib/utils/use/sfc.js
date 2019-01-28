"use strict";

exports.__esModule = true;
exports.default = void 0;

require("../../locale");

var _ = require("..");

/**
 * Create a basic component with common options
 */
var arrayProp = {
  type: Array,
  default: function _default() {
    return [];
  }
};
var numberProp = {
  type: Number,
  default: 0
};

function defaultProps(props) {
  Object.keys(props).forEach(function (key) {
    if (props[key] === Array) {
      props[key] = arrayProp;
    } else if (props[key] === Number) {
      props[key] = numberProp;
    }
  });
}

function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component((0, _.camelize)("-" + name), this);
}

var _default2 = function _default2(name) {
  return function (sfc) {
    sfc.name = name;
    sfc.install = install;
    sfc.props && defaultProps(sfc.props);
    return sfc;
  };
};

exports.default = _default2;