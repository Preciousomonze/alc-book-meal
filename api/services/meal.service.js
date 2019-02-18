import dummyData from '../data/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const realMeals = dummyData.meals.map((meal) => {
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
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    mealItself.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },
  getAMeal(id) {
    const mealGet = dummyData.meals.find(meal => meal.id === id);
    return mealGet || {};
  },
  deleteMeal(id) {
    const mealGet = dummyData.meals.find(meal => meal.id === id);
    const index = dummyData.meals.indexOf(mealGet);
    dummyData.meals.splice(index, 1);
    return dummyData.meals;
  },
};

export default MealService;
