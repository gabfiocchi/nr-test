"use strict";

require("core-js/modules/es.array.join");

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

var server = _http.default.Server(app);

app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use('/api', _api.default);
app.use('/', _express.default.static(_path.default.join(__dirname, '../public')));
var port = process.env.PORT || 8100;
server.listen(port, function () {
  console.log(">>>>> Server port => http://localhost:".concat(port, " <<<<<"));
});
//# sourceMappingURL=server.js.map