import MealService from '../services/meal.service';

const MealController = {
  getMeals(req, res) {
    const allMeals = MealService.getMeals();
    return res
      .json({
        status: 'success',
        data: allMeals,
      })
      .status(200);
  },
  addMeal(req, res) {
    /*
            Expect json of the format
            {
                name: "some food",
                size: "Large",
                "price": 400
            }
        */
    const newMeal = req.body;
    console.log(newMeal);
    const createdMeal = MealService.addMeal(newMeal);
    return res
      .json({
        status: 'success',
        data: createdMeal,
      })
      .status(200);
  },
  getMeal(req, res) {
    // eslint-disable-next-line prefer-destructuring
    const id = req.params.id;
    const getMeal = MealService.getMeal(id);
    return res
      .json({
        status: 'success',
        data: getMeal,
      })
      .status(200);
  },
  deleteMeal(req, res) {
    const { id } = req.params;
    const meals = MealService.deleteMeal(id);
    return res
      .json({
        status: 'success',
        data: meals,
      })
      .status(200);
  },
};

export default MealController;
