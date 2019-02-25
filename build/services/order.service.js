"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../models/order.model"));

var _orderDummyData = _interopRequireDefault(require("../data/orderDummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orders = _orderDummyData.default.orders; // seeing dummy stuff all the time is somehow jare :)

var OrderServices = {
  getOrders: function getOrders() {
    return orders;
  },
  addOrder: function addOrder(order) {
    // eslint-disable-next-line prefer-destructuring
    var length = orders.length;
    var lastId = orders[length - 1].orderId;
    var newId = lastId + 1;
    var newOrder = new _order.default();
    newOrder.id = newId;
    newOrder.customerId = order.customerId;
    newOrder.meal = order.meal;
    newOrder.total = order.total;
    orders.push(newOrder);
    return newOrder;
  },
  updateOrder: function updateOrder(id, Order) {
    var orderItself = orders.find(function (order) {
      return Number(order.orderId) === Number(id);
    });
    var orderIndex = orders.indexOf(orderItself);

    if (!orderItself) {
      return 'Order not found';
    }

    orderItself.mealsOrdered = Order.mealsOrdered;
    orderItself.total = Order.total;

    if (orderItself instanceof _order.default) {
      orderItself.modifyOrder();
    } else {
      orderItself.modified = true;
    }

    orders.splice(orderIndex, 1, orderItself);
    return orderItself;
  },
  deleteOrder: function deleteOrder(id) {
    var orderItself = orders.find(function (order) {
      return Number(order.orderId) === Number(id);
    });

    if (!orderItself) {
      return "Order not found. Non-existing order can't be deleted";
    }

    var orderIndex = orders.indexOf(orderItself);
    orders.splice(orderIndex, 1);
    return 'Order deleted successfully';
  }
};
var _default = OrderServices;
exports.default = _default;
//# sourceMappingURL=order.service.js.map