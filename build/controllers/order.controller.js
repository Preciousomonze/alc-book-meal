"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderController = {
  addOrder: function addOrder(req, res) {
    var orderAdded = req.body;

    var addOrder = _order.default.addOrder(orderAdded);

    return res.json({
      status: 'success',
      data: addOrder
    }).status(200);
  },
  getOrders: function getOrders(req, res) {
    var allOrders = _order.default.getOrders();

    return res.json({
      status: 'success',
      allOrders: allOrders
    }).status(200);
  },
  updateOrder: function updateOrder(req, res) {
    var updatedOrder = req.body;
    var id = req.params.id;

    var orderStuff = _order.default.updateOrder(id, updatedOrder);

    return res.json({
      status: 'success',
      orderStuff: orderStuff
    });
  },
  deleteOrder: function deleteOrder(req, res) {
    var id = req.params.id;

    var deletedStatus = _order.default.deleteAnOrder(id);

    return res.json({
      deletedStatus: deletedStatus
    }).status(200);
  }
};
var _default = OrderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map