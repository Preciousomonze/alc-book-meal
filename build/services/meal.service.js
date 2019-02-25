"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mealDummyData = _interopRequireDefault(require("../data/mealDummyData"));

var _meal = _interopRequireDefault(require("../models/meal.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealData = _mealDummyData.default; // seeing dummy stuff all the time is somehow jare :)

var MealService = {
  getMeals: function getMeals() {
    var realMeals = mealData.meals.map(function (meal) {
      var newMeal = new _meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return realMeals;
  },
  addMeal: function addMeal(meal) {
    var mealItself = meal;
    var mealLength = mealData.meals.length;
    var lastId = mealData.meals[mealLength - 1].id;
    var newId = lastId + 1;
    mealItself.id = newId;
    mealData.meals.push(meal);
    return meal;
  },
  getMeal: function getMeal(id) {
    var mealGet = mealData.meals.find(function (meal) {
      return meal.id === id;
    });
    return mealGet || {};
  },
  deleteMeal: function deleteMeal(id) {
    var mealGet = mealData.meals.find(function (meal) {
      return meal.id === id;
    });
    var index = mealData.meals.indexOf(mealGet);
    mealData.meals.splice(index, 1);
    return mealData.meals;
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.service.js.map