/**
 * Create a basic component with common options
 */
import '../../locale';
import { camelize } from '..';
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
  Vue.component(camelize("-" + name), this);
}

export default (function (name) {
  return function (sfc) {
    sfc.name = name;
    sfc.install = install;
    sfc.props && defaultProps(sfc.props);
    return sfc;
  };
});