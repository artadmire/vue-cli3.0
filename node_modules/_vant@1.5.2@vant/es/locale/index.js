var _messages;

/* eslint-disable import/no-mutable-exports */
import Vue from 'vue';
import deepAssign from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';
var lang = 'zh-CN';
var proto = Vue.prototype;
var messages = (_messages = {}, _messages[lang] = defaultMessages, _messages);
var locale = {
  install: function install() {
    if (proto.$vantLang) {
      return;
    }

    Vue.util.defineReactive(proto, '$vantLang', lang);
    Vue.util.defineReactive(proto, '$vantMessages', messages);
  },
  use: function use(newLang, messages) {
    var _this$add;

    lang = newLang;
    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    deepAssign(proto.$vantMessages, messages);
  }
};
locale.install();
export default locale;
export { lang, messages };