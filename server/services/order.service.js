import Orders from '../models/order.model';
import dummyData from '../data/orderDummyData';

const { orders } = dummyData;// seeing dummy stuff all the time is somehow jare :)

const OrderServices = {
  getOrders() {
    return orders;
  },
  addOrder(order) {
    // eslint-disable-next-line prefer-destructuring
    const length = orders.length;
    const lastId = orders[length - 1].orderId;
    const newId = lastId + 1;
    const newOrder = new Orders();
    newOrder.id = newId;
    newOrder.customerId = order.customerId;
    newOrder.meal = order.meal;
    newOrder.total = order.total;
    orders.push(newOrder);
    return newOrder;
  },
  updateOrder(id, Order) {
    const orderItself = orders.find(order => Number(order.orderId) === Number(id));
    const orderIndex = orders.indexOf(orderItself);
    if (!orderItself) {
      return 'Order not found';
    }
    orderItself.mealsOrdered = Order.mealsOrdered;
    orderItself.total = Order.total;
    if (orderItself instanceof Orders) {
      orderItself.modifyOrder();
    } else {
      orderItself.modified = true;
    }
    orders.splice(orderIndex, 1, orderItself);
    return orderItself;
  },
  deleteOrder(id) {
    const orderItself = orders.find(order => Number(order.orderId) === Number(id));
    if (!orderItself) {
      return "Order not found. Non-existing order can't be deleted";
    }
    const orderIndex = orders.indexOf(orderItself);
    orders.splice(orderIndex, 1);
    return 'Order deleted successfully';
  },
};
export default OrderServices;
