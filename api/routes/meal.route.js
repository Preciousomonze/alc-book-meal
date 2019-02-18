
import { Router } from 'express';
import MealController from '../controllers/meal.controller';

const mealRouter = Router();

mealRouter.get('/meals/', MealController.fetchAllMeals);

mealRouter.post('/meals/', MealController.addAMeal);

mealRouter.get('/meals/:id', MealController.getSingleMeal);

mealRouter.delete('/meals/:id', MealController.deleteMeal);
export default mealRouter;
