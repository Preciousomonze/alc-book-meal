import OrderServices from '../services/order.service';

const OrderController = {
  addOrder(req, res) {
    const orderAdded = req.body;
    const addOrder = OrderServices.addOrder(orderAdded);
    return res
      .json({
        status: 'success',
        data: addOrder,
      })
      .status(200);
  },
  getOrders(req, res) {
    const allOrders = OrderServices.getOrders();
    return res
      .json({
        status: 'success',
        allOrders,
      })
      .status(200);
  },
  updateOrder(req, res) {
    const updatedOrder = req.body;
    const { id } = req.params;
    const orderStuff = OrderServices.updateOrder(id, updatedOrder);
    return res.json({
      status: 'success',
      orderStuff,
    });
  },
  deleteOrder(req, res) {
    const { id } = req.params;
    const deletedStatus = OrderServices.deleteAnOrder(id);
    return res.json({
      deletedStatus,
    })
      .status(200);
  },
};

export default OrderController;
