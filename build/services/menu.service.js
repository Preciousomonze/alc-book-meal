"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menuDummyData = _interopRequireDefault(require("../data/menuDummyData"));

var _menu = _interopRequireDefault(require("../models/menu.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuData = _menuDummyData.default.menuData; // seeing dummy stuff all the time is somehow jare :)

var MenuService = {
  getMenus: function getMenus() {
    var realMenus = menuData.menus.map(function (menu) {
      var newMenu = new _menu.default();
      newMenu.id = menu.id;
      newMenu.name = menu.name;
      newMenu.size = menu.size;
      newMenu.price = menu.price;
      return newMenu;
    });
    return realMenus;
  },
  addMenu: function addMenu(menu) {
    var menuItself = menu;
    var menuLength = menuData.menus.length;
    var lastId = menuData.menus[menuLength - 1].id;
    var newId = lastId + 1;
    menuItself.id = newId;
    menuData.menus.push(menu);
    return menu;
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=menu.service.js.map