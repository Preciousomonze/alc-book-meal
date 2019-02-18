import express from 'express';
import MealsService from '../services/meal.service';

const mealsService = new MealsService();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send(mealsService.getAll());
});

router.get('/:id', (req, res) => {
  res.status(200).send(mealsService.getMeal(req.params.id));
});
const MealRouter = router;
export default MealRouter;
