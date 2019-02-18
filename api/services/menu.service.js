import DummyData from '../data/dummy-data';
import Menu from '../models/menu.model';

const MenuService = {
  fetchAllMenus() {
    const realMenus = DummyData.menus.map((menu) => {
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
    const menuLength = DummyData.menus.length;
    const lastId = DummyData.menus[menuLength - 1].id;
    const newId = lastId + 1;
    menuItself.id = newId;
    DummyData.menus.push(menu);
    return menu;
  },
};

export default MenuService;
