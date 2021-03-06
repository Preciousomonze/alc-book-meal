"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _order = _interopRequireDefault(require("../controllers/order.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderRouter = (0, _express.Router)();
orderRouter.get('/orders/', _order.default.getOrders);
orderRouter.post('/order/', _order.default.addOrder);
orderRouter.put('/order/:id', _order.default.updateOrder);
orderRouter.delete('/order/:id', _order.default.deleteOrder);
var _default = orderRouter;
exports.default = _default;
//# sourceMappingURL=order.route.js.map