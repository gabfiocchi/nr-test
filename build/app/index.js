"use strict";

require("./main.scss");

var _core = require("./core");

var _Home = _interopRequireDefault(require("./pages/Home"));

var _ = _interopRequireDefault(require("./pages/404"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.App.create({
  routes: {
    '/': new _Home.default(),
    '/error': _.default
  }
});
//# sourceMappingURL=index.js.map