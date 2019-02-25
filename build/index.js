"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _order = _interopRequireDefault(require("./routes/order.route"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// thanks to @timzprof for the inspiration
var app = (0, _express.default)();
var apiNamespace = '/api/v1/';
app.use(apiNamespace, _order.default);
app.use(apiNamespace, _meal.default);
app.use(apiNamespace, _menu.default);
var PORT = 7000;
app.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log("yae, server running on port ".concat(PORT, " :)"));
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map