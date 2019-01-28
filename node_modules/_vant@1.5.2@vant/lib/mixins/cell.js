"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Common Cell Props
 */
var _default = {
  props: {
    icon: String,
    center: Boolean,
    isLink: Boolean,
    required: Boolean,
    titleClass: String,
    valueClass: String,
    labelClass: String,
    title: [String, Number],
    value: [String, Number],
    label: [String, Number],
    border: {
      type: Boolean,
      default: true
    }
  }
};
exports.default = _default;