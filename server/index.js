import express from 'express';
import orderRouter from './routes/order.route';
import mealRouter from './routes/meal.route';
import menuRouter from './routes/menu.route';
// thanks to @timzprof for the inspiration

const app = express();
const apiNamespace = '/api/v1/';

app.use(apiNamespace, orderRouter);
app.use(apiNamespace, mealRouter);
app.use(apiNamespace, menuRouter);

// home
app.all('/', (req, res) => (
  res
    .json({
      status: 'success',
      message: 'Welcome to The book a meal better chow',
    })
    .status(200)));

// for fun
app.all(apiNamespace, (req, res) => (
  res
    .json({
      status: 'success',
      message: 'Welcome to The book a meal better chow api version 1',
    })
    .status(200)));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`yae, server running on port ${PORT} :)`);
});
export default app;
