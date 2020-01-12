"use strict";

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Host = _interopRequireDefault(require("../models/Host"));

var _Application = _interopRequireDefault(require("../models/Application"));

var _hostAppData = _interopRequireDefault(require("../data/host-app-data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var configs = {
  MAX_APPS_APDEX: 25,
  MAX_APPS_HOST: 5
};

var Host =
/*#__PURE__*/
function () {
  function Host() {
    _classCallCheck(this, Host);

    this.data = _hostAppData.default;
    this.configs = configs;
    this.hosts = [];
    this.hostsApps = {};
    this.appsWithHosts = {};
    this.init();
  }

  _createClass(Host, [{
    key: "init",
    value: function init() {
      var _this = this;

      var hostsNames = [];
      var hosts = [];
      this.data.forEach(function (app) {
        var appId = _this.createAppId();

        _this.appsWithHosts[appId] = [];
        app.host.forEach(function (hostName) {
          if (!hostsNames.includes(hostName)) {
            hostsNames.push(hostName);
            _this.hostsApps[hostName] = new _Host.default(hostName);
          }

          var appParsed = new _Application.default(appId, app.name, app.apdex, app.version, app.contributors);

          _this.appsWithHosts[appId].push(hostName);

          _this.hostsApps[hostName].apps.push(appParsed);
        });
      });
      this.hosts = hosts;
    }
  }, {
    key: "getHostsApps",
    value: function getHostsApps() {
      return this.normalizeHosts(this.hostsApps);
    }
  }, {
    key: "getAppsWithHosts",
    value: function getAppsWithHosts() {
      return this.appsWithHosts;
    }
  }, {
    key: "createAppId",
    value: function createAppId() {
      return Math.random().toString(36).substr(2, 16);
    }
  }, {
    key: "applyMaxAppsApdex",
    value: function applyMaxAppsApdex(apps) {
      return apps.slice(0, this.configs.MAX_APPS_APDEX);
    }
  }, {
    key: "normalizeHosts",
    value: function normalizeHosts(hosts) {
      var normalized = [];
      Object.keys(hosts).forEach(function (host) {
        normalized.push(hosts[host]);
      });
      return normalized;
    }
  }, {
    key: "sortApdex",
    value: function sortApdex(apps) {
      return apps.sort(function (a, b) {
        return b.apdex - a.apdex;
      });
    }
  }, {
    key: "getTopAppsByHost",
    value: function getTopAppsByHost(hostName) {
      if (!this.hostsApps[hostName]) {
        return [];
      }

      var apps = this.sortApdex(this.hostsApps[hostName].apps);
      return this.applyMaxAppsApdex(apps);
    }
  }, {
    key: "removeAppFromHosts",
    value: function removeAppFromHosts(id) {
      var _this2 = this;

      if (!this.appsWithHosts[id]) {
        return null;
      }

      var hostsApps = JSON.parse(JSON.stringify(this.hostsApps));
      this.appsWithHosts[id].forEach(function (hostName) {
        var apps = hostsApps[hostName].apps.filter(function (app) {
          return app.id !== id;
        });
        hostsApps[hostName].apps = _this2.applyMaxAppsApdex(_this2.sortApdex(apps));
      });
      return this.normalizeHosts(hostsApps);
    }
  }, {
    key: "addAppToHosts",
    value: function addAppToHosts(_ref) {
      var name = _ref.name,
          host = _ref.host,
          _ref$contributors = _ref.contributors,
          contributors = _ref$contributors === void 0 ? [] : _ref$contributors,
          _ref$apdex = _ref.apdex,
          apdex = _ref$apdex === void 0 ? 1 : _ref$apdex,
          _ref$version = _ref.version,
          version = _ref$version === void 0 ? null : _ref$version;

      if (!name && !host) {
        return null;
      }

      var hostsArray = host;

      if (!Array.isArray(host)) {
        hostsArray = [];
        hostsArray.push(host);
      }

      hostsArray = hostsArray.filter(function (item, index) {
        return hostsArray.indexOf(item) === index;
      }); // this.data.push({
      //     name,
      //     host: hostsArray,
      //     contributors,
      //     apdex,
      //     version
      // });

      var appId = this.createAppId();
      var appParsed = new _Application.default(appId, name, apdex, version, contributors); // this.appsWithHosts[appId] = hostsArray;
      // hostsArray.forEach((hostName) => {
      //     if (!this.hostsApps[hostName]) {
      //         this.hostsApps[hostName] = new HostModel(hostName);
      //     }
      //     this.hostsApps[hostName].apps.push(appParsed);
      // });

      return {
        app: appParsed,
        hosts: hostsArray
      };
    }
  }]);

  return Host;
}();

exports.default = Host;
//# sourceMappingURL=Host.js.map