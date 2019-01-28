import _extends from "@babel/runtime/helpers/esm/extends";
import create from '../../utils/create';
import { isSkuChoosable } from '../utils/skuHelper';
export default create({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('span', {
      staticClass: "van-sku-row__item",
      class: {
        'van-sku-row__item--active': _vm.isChoosed,
        'van-sku-row__item--disabled': !_vm.isChoosable
      },
      domProps: {
        "textContent": _vm._s(_vm.skuValue.name)
      },
      on: {
        "click": _vm.onSelect
      }
    });
  },
  name: 'sku-row-item',
  props: {
    skuEventBus: Object,
    skuValue: Object,
    skuList: Array,
    selectedSku: Object,
    skuKeyStr: String
  },
  computed: {
    isChoosed: function isChoosed() {
      return this.skuValue.id === this.selectedSku[this.skuKeyStr];
    },
    isChoosable: function isChoosable() {
      return isSkuChoosable(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.isChoosable) {
        this.skuEventBus.$emit('sku:select', _extends({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  }
});