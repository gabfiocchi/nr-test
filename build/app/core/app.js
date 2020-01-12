"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = _interopRequireDefault(require("./router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  create: function create(options) {
    window.onload = function () {
      var main = document.createElement('main');
      main.setAttribute('id', 'root');
      document.body.appendChild(main);
    };

    this.initialize(options);
  },
  initialize: function initialize(_ref) {
    var routes = _ref.routes;

    _router.default.initialize(routes);
  }
};
exports.default = _default;
//# sourceMappingURL=app.js.map