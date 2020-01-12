"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApplicationModel = function ApplicationModel(id, name, apdex, version, contributors) {
  _classCallCheck(this, ApplicationModel);

  this.id = id;
  this.name = name;
  this.apdex = apdex;
  this.version = version;
  this.contributors = contributors;
};

exports.default = ApplicationModel;
//# sourceMappingURL=Application.js.map