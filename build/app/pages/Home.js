"use strict";

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

var _item = _interopRequireDefault(require("../components/item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _default =
/*#__PURE__*/
function () {
  function _default() {
    var _this = this;

    _classCallCheck(this, _default);

    this.state = {
      email: null,
      viewGrid: true,
      hosts: []
    };

    document.toggleView = function () {
      _this.state.viewGrid = !_this.state.viewGrid;

      _this.update();
    };

    this.requestUserEmail();
  }

  _createClass(_default, [{
    key: "fetchData",
    value: function () {
      var _fetchData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var hosts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.state.test = true;
                _context.prev = 1;
                _context.next = 4;
                return fetch('http://localhost:8100/api/hosts');

              case 4:
                _context.next = 6;
                return _context.sent.json();

              case 6:
                this.state.hosts = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                this.fetchData();

              case 12:
                return _context.abrupt("return", hosts);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 9]]);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }()
  }, {
    key: "requestUserEmail",
    value: function requestUserEmail(message) {
      // eslint-disable-next-line no-alert
      var email = prompt(message || 'Enter your user email:');
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (email && re.test(String(email).toLowerCase())) {
        this.state.email = email;
      } else {
        this.requestUserEmail('Please enter a valid email');
      }
    }
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var app;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                app = document.getElementById('root');
                _context2.next = 3;
                return this.render();

              case 3:
                app.innerHTML = _context2.sent;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", "\n            <header>\n                <h1>Apps by Host</h1>\n                <h2>for user ".concat(this.state.email, "</h2>\n                <div class=\"form-group\">\n                    <input type=\"checkbox\" id=\"checkbox\" ").concat(this.state.viewGrid ? 'checked' : '', " onChange=\"toggleView()\">\n                    <label for=\"checkbox\">").concat(this.state.viewGrid ? 'Show as an awesome grid' : 'Show as list', "</label>\n                </div>\n            </header>\n            <div class=\"").concat(this.state.viewGrid ? 'container' : 'container listview', "\">                \n                ").concat(this.state.hosts.map(function (host) {
                  return "\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <h3 class=\"title\">".concat(host.name, "</h3>\n                        <ul>\n                            ").concat(host.apps.slice(0, 5).map(function (app) {
                    return new _item.default(app).render();
                  }).join(''), "\n                        </ul>\n                    </div>\n                </div>\n            ");
                }).join(''), "\n            </div>\n        "));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }]);

  return _default;
}();

exports.default = _default;
//# sourceMappingURL=Home.js.map