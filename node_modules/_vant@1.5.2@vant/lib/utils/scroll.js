"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ = require(".");

var _default = {
  // get nearest scroll element
  getScrollEventTarget: function getScrollEventTarget(element, rootParent) {
    if (rootParent === void 0) {
      rootParent = window;
    }

    var node = element; // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome

    while (node && node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === 1 && node !== rootParent) {
      var _this$getComputedStyl = this.getComputedStyle(node),
          overflowY = _this$getComputedStyl.overflowY;

      if (overflowY === 'scroll' || overflowY === 'auto') {
        return node;
      }

      node = node.parentNode;
    }

    return rootParent;
  },
  getScrollTop: function getScrollTop(element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
  },
  setScrollTop: function setScrollTop(element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },
  // get distance from element top to page top
  getElementTop: function getElementTop(element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
  },
  getVisibleHeight: function getVisibleHeight(element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height;
  },
  getComputedStyle: !_.isServer && document.defaultView.getComputedStyle.bind(document.defaultView)
};
exports.default = _default;