import { use } from '../utils';

var _use = use('cell-group'),
    sfc = _use[0],
    bem = _use[1];

export default sfc({
  props: {
    border: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h) {
    return h("div", {
      "class": [bem(), {
        'van-hairline--top-bottom': this.border
      }]
    }, [this.$slots.default]);
  }
});