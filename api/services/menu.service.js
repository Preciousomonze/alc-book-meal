import dummyData from '../data/menuDummyData';
import Menu from '../models/menu.model';

const { menuData } = dummyData; // seeing dummy stuff all the time is somehow jare :)
const MenuService = {
  getMenus() {
    const realMenus = menuData.menus.map((menu) => {
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
    const menuLength = menuData.menus.length;
    const lastId = menuData.menus[menuLength - 1].id;
    const newId = lastId + 1;
    menuItself.id = newId;
    menuData.menus.push(menu);
    return menu;
  },
};

export default MenuService;
