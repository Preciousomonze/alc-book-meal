"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  getMenu: function getMenu(req, res) {
    var date = req.body.date;
    /* Expect json of the format
      {
        date: 18-02-2019
      } */

    var getMenu = _menu.default.getMenu(date);

    return res.json({
      status: 'success',
      data: getMenu
    }).status(200);
  },
  addMenu: function addMenu(req, res) {
    var menu = req.body;

    var addMenu = _menu.default.addMenu(menu);

    return res.json({
      status: 'success',
      data: addMenu
    }).status(200);
  }
};
var _default = MenuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map