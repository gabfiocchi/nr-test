"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HostModel = function HostModel(name) {
  var apps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  _classCallCheck(this, HostModel);

  this.name = name;
  this.apps = apps;
};

exports.default = HostModel;
//# sourceMappingURL=Host.js.map