"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Common Picker Props
 */
var _default = {
  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    cancelButtonText: String,
    confirmButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    itemHeight: {
      type: Number,
      default: 44
    }
  }
};
exports.default = _default;