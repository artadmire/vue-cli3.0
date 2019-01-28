"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _create = _interopRequireDefault(require("../utils/create"));

var _touch = _interopRequireDefault(require("../mixins/touch"));

var _default = (0, _create.default)({
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: _vm.b({
        disabled: _vm.disabled
      }),
      style: _vm.style,
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.onClick($event);
        }
      }
    }, [_c('div', {
      class: _vm.b('bar'),
      style: _vm.barStyle
    }, [_c('div', {
      class: _vm.b('button-wrapper'),
      on: {
        "touchstart": _vm.onTouchStart,
        "touchmove": function touchmove($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.onTouchMove($event);
        },
        "touchend": _vm.onTouchEnd,
        "touchcancel": _vm.onTouchEnd
      }
    }, [_vm._t("button", [_c('div', {
      class: _vm.b('button')
    })])], 2)])]);
  },
  name: 'slider',
  mixins: [_touch.default],
  props: {
    min: Number,
    value: Number,
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    barHeight: {
      type: String,
      default: '2px'
    }
  },
  computed: {
    style: function style() {
      return {
        background: this.inactiveColor
      };
    },
    barStyle: function barStyle() {
      return {
        width: this.format(this.value) + '%',
        height: this.barHeight,
        background: this.activeColor
      };
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) return;
      this.touchStart(event);
      this.startValue = this.format(this.value);
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) return;
      this.touchMove(event);
      var rect = this.$el.getBoundingClientRect();
      var diff = this.deltaX / rect.width * 100;
      this.updateValue(this.startValue + diff);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) return;
      this.updateValue(this.value, true);
    },
    onClick: function onClick(event) {
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var value = (event.clientX - rect.left) / rect.width * 100;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);
      this.$emit('input', value);

      if (end) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  }
});

exports.default = _default;