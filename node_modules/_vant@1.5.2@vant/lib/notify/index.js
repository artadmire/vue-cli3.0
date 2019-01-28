"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _vue = _interopRequireDefault(require("vue"));

var _Notify = _interopRequireDefault(require("./Notify"));

var _color = require("../utils/color");

var _utils = require("../utils");

var timer;
var instance;

var initInstance = function initInstance() {
  instance = new (_vue.default.extend(_Notify.default))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

var parseOptions = function parseOptions(message) {
  return (0, _utils.isObj)(message) ? message : {
    message: message
  };
};

var Notify = function Notify(options) {
  /* istanbul ignore if */
  if (_utils.isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = (0, _extends2.default)({}, Notify.currentOptions, parseOptions(options));
  (0, _extends2.default)(instance, options);
  clearTimeout(timer);

  if (options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
};

Notify.clear = function () {
  if (instance) {
    instance.value = false;
  }
};

Notify.defaultOptions = {
  value: true,
  text: '',
  color: _color.WHITE,
  background: _color.RED,
  duration: 3000
};

Notify.setDefaultOptions = function (options) {
  (0, _extends2.default)(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = (0, _extends2.default)({}, Notify.defaultOptions);
};

Notify.install = function () {
  _vue.default.use(_Notify.default);
};

Notify.resetDefaultOptions();
_vue.default.prototype.$notify = Notify;
var _default = Notify;
exports.default = _default;