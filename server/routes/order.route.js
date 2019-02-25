import { Router } from 'express';

import OrderController from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/orders/', OrderController.getOrders);

orderRouter.post('/order/', OrderController.addOrder);

orderRouter.put('/order/:id', OrderController.updateOrder);

orderRouter.delete('/order/:id', OrderController.deleteOrder);
export default orderRouter;
