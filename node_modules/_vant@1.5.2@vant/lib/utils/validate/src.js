"use strict";

exports.__esModule = true;
exports.default = src;

/**
 * Is image source
 */
function src(url) {
  return /^(https?:)?\/\/|data:image/.test(url);
}