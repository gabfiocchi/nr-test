"use strict";

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.split");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  initialize: function initialize(routes) {
    var _this = this;

    this.routes = routes; // Listen on hash change:

    window.addEventListener('hashchange', function () {
      return _this.renderPage();
    }); // Listen on page load:

    window.addEventListener('load', function () {
      return _this.renderPage();
    });
  },
  setState: function setState(_ref) {
    var data = _ref.data,
        title = _ref.title,
        route = _ref.route;
    window.history.pushState(data, title, route);
  },
  renderPage: function () {
    var _renderPage = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var app, request, page;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              app = document.getElementById('root');
              request = this.parseRequesURL();
              page = this.routes[request] || this.routes['/error'];

              if (!page.fetchData) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return page.fetchData();

            case 6:
              _context.next = 8;
              return page.render();

            case 8:
              app.innerHTML = _context.sent;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function renderPage() {
      return _renderPage.apply(this, arguments);
    }

    return renderPage;
  }(),
  parseRequesURL: function parseRequesURL() {
    var url = window.location.hash.slice(1).toLowerCase() || '/';
    var hash = url.split('/');
    var resource = hash[1] || null;
    var id = hash[2] || null;
    var parsedURL = '/';

    if (resource) {
      parsedURL += resource;
    }

    if (id) {
      parsedURL += "/".concat(id);
    }

    return parsedURL;
  }
};
exports.default = _default;
//# sourceMappingURL=router.js.map