"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _meal = _interopRequireDefault(require("../controllers/meal.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealRouter = (0, _express.Router)();
mealRouter.get('/meals/', _meal.default.getMeals);
mealRouter.post('/meals/', _meal.default.addMeal);
mealRouter.get('/meals/:id', _meal.default.getMeal);
mealRouter.delete('/meals/:id', _meal.default.deleteMeal);
var _default = mealRouter;
exports.default = _default;
//# sourceMappingURL=meal.route.js.map