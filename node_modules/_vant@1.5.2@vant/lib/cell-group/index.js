"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('cell-group'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
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

exports.default = _default;