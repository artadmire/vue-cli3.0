var _components;

import Info from '../info';
import create from '../utils/create-basic';
import _isSrc from '../utils/validate/src';
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', _vm._g({
      class: [_vm.classPrefix, _vm.isSrc ? 'van-icon--image' : _vm.classPrefix + "-" + _vm.name],
      style: _vm.style
    }, _vm.$listeners), [_vm._t("default"), _vm.isSrc ? _c('img', {
      attrs: {
        "src": _vm.name
      }
    }) : _vm._e(), _c('van-info', {
      attrs: {
        "info": _vm.info
      }
    })], 2);
  },
  name: 'icon',
  components: (_components = {}, _components[Info.name] = Info, _components),
  props: {
    name: String,
    size: String,
    color: String,
    info: [String, Number],
    classPrefix: {
      type: String,
      default: 'van-icon'
    }
  },
  computed: {
    style: function style() {
      return {
        color: this.color,
        fontSize: this.size
      };
    },
    isSrc: function isSrc() {
      return _isSrc(this.name);
    }
  }
});