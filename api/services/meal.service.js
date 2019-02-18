import DummyData from '../data/dummy-data';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const realMeals = DummyData.meals.map((meal) => {
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
    const mealLength = DummyData.meals.length;
    const lastId = DummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    mealItself.id = newId;
    DummyData.meals.push(meal);
    return meal;
  },
  getAMeal(id) {
    const mealGet = DummyData.meals.find(meal => meal.id === id);
    return mealGet || {};
  },
  deleteMeal(id) {
    const mealGet = DummyData.meals.find(meal => meal.id === id);
    const index = DummyData.meals.indexOf(mealGet);
    DummyData.meals.splice(index, 1);
    return DummyData.meals;
  },
};

export default MealService;
