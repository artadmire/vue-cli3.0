import _extends from "@babel/runtime/helpers/esm/extends";
import Vue from 'vue';
import VanNotify from './Notify';
import { RED, WHITE } from '../utils/color';
import { isObj, isServer } from '../utils';
var timer;
var instance;

var initInstance = function initInstance() {
  instance = new (Vue.extend(VanNotify))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
};

var parseOptions = function parseOptions(message) {
  return isObj(message) ? message : {
    message: message
  };
};

var Notify = function Notify(options) {
  /* istanbul ignore if */
  if (isServer) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  options = _extends({}, Notify.currentOptions, parseOptions(options));

  _extends(instance, options);

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
  color: WHITE,
  background: RED,
  duration: 3000
};

Notify.setDefaultOptions = function (options) {
  _extends(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = _extends({}, Notify.defaultOptions);
};

Notify.install = function () {
  Vue.use(VanNotify);
};

Notify.resetDefaultOptions();
Vue.prototype.$notify = Notify;
export default Notify;