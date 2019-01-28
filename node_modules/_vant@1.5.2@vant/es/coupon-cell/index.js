import { use } from '../utils';
import Cell from '../cell';

var _use = use('coupon-cell'),
    sfc = _use[0],
    bem = _use[1],
    t = _use[2];

export default sfc({
  model: {
    prop: 'chosenCoupon'
  },
  props: {
    title: String,
    coupons: Array,
    currency: {
      type: String,
      default: '¥'
    },
    border: {
      type: Boolean,
      default: true
    },
    editable: {
      type: Boolean,
      default: true
    },
    chosenCoupon: {
      type: Number,
      default: -1
    }
  },
  computed: {
    value: function value() {
      var coupons = this.coupons;
      var coupon = coupons[this.chosenCoupon];

      if (coupon) {
        var value = coupon.denominations || coupon.value;
        return "-" + this.currency + (value / 100).toFixed(2);
      }

      return coupons.length === 0 ? t('tips') : t('count', coupons.length);
    },
    valueClass: function valueClass() {
      return this.coupons[this.chosenCoupon] ? 'van-coupon-cell--selected' : '';
    }
  },
  render: function render(h) {
    var _this = this;

    return h(Cell, {
      "class": bem(),
      "attrs": {
        "title": this.title || t('title'),
        "value": this.value,
        "border": this.border,
        "is-link": this.editable,
        "value-class": this.valueClass
      },
      "on": {
        "click": function click() {
          _this.$emit('click');
        }
      }
    });
  }
});