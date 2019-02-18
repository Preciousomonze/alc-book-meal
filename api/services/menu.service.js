import dummyData from '../data/dummyData';
import Menu from '../models/menu.model';

const MenuService = {
  fetchAllMenus() {
    const realMenus = dummyData.menus.map((menu) => {
      const newMenu = new Menu();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.size = menu.size;
      newMenu.price = menu.price;
      return newMenu;
    });
    return realMenus;
  },
  addMenu(menu) {
    const menuItself = menu;
    const menuLength = dummyData.menus.length;
    const lastId = dummyData.menus[menuLength - 1].id;
    const newId = lastId + 1;
    menuItself.id = newId;
    dummyData.menus.push(menu);
    return menu;
  },
};

export default MenuService;
