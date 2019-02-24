import MenuService from '../services/menu.service';

const MenuController = {
  getMenu(req, res) {
    const { date } = req.body;
    /* Expect json of the format
      {
        date: 18-02-2019
      } */
    const getMenu = MenuService.getMenu(date);
    return res
      .json({
        status: 'success',
        data: getMenu,
      })
      .status(200);
  },
  addMenu(req, res) {
    const menu = req.body;
    const addMenu = MenuService.addMenu(menu);
    return res
      .json({
        status: 'success',
        data: addMenu,
      })
      .status(200);
  },
};

export default MenuController;
