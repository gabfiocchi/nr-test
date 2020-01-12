"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _Host = _interopRequireDefault(require("./controllers/Host"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function () {
  var router = (0, _express.Router)();
  var HostCtrl = new _Host.default();
  router.get('/all', function (_req, res) {
    res.status(200).json(HostCtrl.data);
  });
  router.get('/hosts', function (_req, res) {
    res.status(200).json(HostCtrl.getHostsApps());
  });
  router.get('/hosts/:host', function (req, res) {
    res.status(200).json(HostCtrl.getTopAppsByHost(req.params.host));
  });
  router.get('/hosts/remove/:id', function (req, res) {
    var data = HostCtrl.removeAppFromHosts(req.params.id);

    if (data) {
      return res.status(200).json(data);
    }

    return res.status(404).json({
      message: "Apps with id ".concat(req.params.id, " not exists.")
    });
  });
  router.get('/apps', function (_req, res) {
    res.status(200).json(HostCtrl.getAppsWithHosts());
  });
  router.post('/apps', function (req, res) {
    res.status(200).json(HostCtrl.addAppToHosts(req.body));
  });
  return router;
}();

exports.default = _default;
//# sourceMappingURL=index.js.map