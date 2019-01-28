"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.messages = exports.lang = exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _deepAssign = _interopRequireDefault(require("../utils/deep-assign"));

var _zhCN = _interopRequireDefault(require("./lang/zh-CN"));

var _messages;

var lang = 'zh-CN';
exports.lang = lang;
var proto = _vue.default.prototype;
var messages = (_messages = {}, _messages[lang] = _zhCN.default, _messages);
exports.messages = messages;
var locale = {
  install: function install() {
    if (proto.$vantLang) {
      return;
    }

    _vue.default.util.defineReactive(proto, '$vantLang', lang);

    _vue.default.util.defineReactive(proto, '$vantMessages', messages);
  },
  use: function use(newLang, messages) {
    var _this$add;

    exports.lang = lang = newLang;
    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    (0, _deepAssign.default)(proto.$vantMessages, messages);
  }
};
locale.install();
var _default = locale;
exports.default = _default;