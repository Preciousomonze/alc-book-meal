
import { Router } from 'express';
import MealController from '../controllers/meal.controller';

const mealRouter = Router();

mealRouter.get('meals/', MealController.getMeals);

mealRouter.post('meals/', MealController.addMeal);

mealRouter.get('meals/:id', MealController.getMeal);

mealRouter.delete('meals/:id', MealController.deleteMeal);
export default mealRouter;
