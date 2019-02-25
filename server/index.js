import express from 'express';
import orderRouter from './routes/order.route';
import mealRouter from './routes/meal.route';
import menuRouter from './routes/menu.route';
// thanks to @timsprof for the inspiration

const app = express();
const apiNamespace = '/api/v1/';

app.use(apiNamespace, orderRouter);
app.use(apiNamespace, mealRouter);
app.use(apiNamespace, menuRouter);

const PORT = 7000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`yae, server running on port ${PORT} :)`);
});
export default app;
