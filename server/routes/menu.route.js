import { Router } from 'express';

import MenuController from '../controllers/menu.controller';

const router = Router();

// add menu controller
router.get('/menu/', MenuController.getMenu);

router.post('/menu/', MenuController.addMenu);

const menuRouter = router;
export default menuRouter;
