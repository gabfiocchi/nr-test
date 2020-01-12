"use strict";

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(template, options) {
  return template.replace(/\{\{\s?(\w+)\s?\}\}/g, function (_match, variable) {
    return options[variable] || '';
  });
};

exports.default = _default;
//# sourceMappingURL=render.js.map