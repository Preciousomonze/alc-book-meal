import dummyData from '../data/mealDummyData';
import Meal from '../models/meal.model';

const mealData = dummyData;// seeing dummy stuff all the time is somehow jare :)

const MealService = {
  getMeals() {
    const realMeals = mealData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return realMeals;
  },
  addMeal(meal) {
    const mealItself = meal;
    const mealLength = mealData.meals.length;
    const lastId = mealData.meals[(mealLength - 1)].id;
    const newId = lastId + 1;
    mealItself.id = newId;
    mealData.meals.push(meal);
    return meal;
  },
  getMeal(id) {
    const mealGet = mealData.meals.find(meal => meal.id === id);
    return mealGet || {};
  },
  deleteMeal(id) {
    const mealGet = mealData.meals.find(meal => meal.id === id);
    const index = mealData.meals.indexOf(mealGet);
    mealData.meals.splice(index, 1);
    return mealData.meals;
  },
};
export default MealService;
