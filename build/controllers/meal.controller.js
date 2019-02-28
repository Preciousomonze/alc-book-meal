"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  getMeals: function getMeals(req, res) {
    var allMeals = _meal.default.getMeals();

    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
  },
  addMeal: function addMeal(req, res) {
    /*
            Expect json of the format
            {
                name: "some food",
                size: "Large",
                "price": 400
            }
        */
    var newMeal = req.body;
    console.log(newMeal);

    var createdMeal = _meal.default.addMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(200);
  },
  getMeal: function getMeal(req, res) {
    // eslint-disable-next-line prefer-destructuring
    var id = req.params.id;

    var getMeal = _meal.default.getMeal(id);

    return res.json({
      status: 'success',
      data: getMeal
    }).status(200);
  },
  deleteMeal: function deleteMeal(req, res) {
    var id = req.params.id;

    var meals = _meal.default.deleteMeal(id);

    return res.json({
      status: 'success',
      data: meals
    }).status(200);
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map