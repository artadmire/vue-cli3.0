"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _use = (0, _utils.use)('badge-group'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  provide: function provide() {
    return {
      vanBadgeGroup: this
    };
  },
  data: function data() {
    return {
      badges: []
    };
  },
  render: function render(h) {
    return h("div", {
      "class": [bem(), 'van-hairline--top-bottom']
    }, [this.$slots.default]);
  }
});

exports.default = _default;