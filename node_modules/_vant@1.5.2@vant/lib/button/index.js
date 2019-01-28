"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../utils");

var _loading = _interopRequireDefault(require("../loading"));

var _use = (0, _utils.use)('button'),
    sfc = _use[0],
    bem = _use[1];

var _default = sfc({
  props: {
    text: String,
    block: Boolean,
    plain: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    disabled: Boolean,
    nativeType: String,
    bottomAction: Boolean,
    tag: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    onClick: function onClick(event) {
      if (!this.loading && !this.disabled) {
        this.$emit('click', event);
      }
    }
  },
  render: function render(h) {
    return h(this.tag, {
      "attrs": {
        "type": this.nativeType,
        "disabled": this.disabled
      },
      "class": bem([this.type, this.size, {
        block: this.block,
        plain: this.plain,
        round: this.round,
        square: this.square,
        loading: this.loading,
        disabled: this.disabled,
        'bottom-action': this.bottomAction
      }]),
      "on": {
        "click": this.onClick
      }
    }, [this.loading ? h(_loading.default, {
      "attrs": {
        "size": "20px",
        "color": this.type === 'default' ? undefined : ''
      }
    }) : h("span", {
      "class": bem('text')
    }, [this.$slots.default || this.text])]);
  }
});

exports.default = _default;