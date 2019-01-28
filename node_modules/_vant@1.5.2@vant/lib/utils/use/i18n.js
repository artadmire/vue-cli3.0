"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ = require("..");

var _locale = require("../../locale");

var _default = function _default(name) {
  var prefix = (0, _.camelize)(name) + '.';
  return function (path) {
    var message = (0, _.get)(_locale.messages[_locale.lang], prefix + path) || (0, _.get)(_locale.messages[_locale.lang], path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
};

exports.default = _default;