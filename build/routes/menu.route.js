"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menu = _interopRequireDefault(require("../controllers/menu.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)(); // add menu controller

router.get('menu/', _menu.default.getMenu);
router.post('menu/', _menu.default.addMenu);
var menuRouter = router;
var _default = menuRouter;
exports.default = _default;
//# sourceMappingURL=menu.route.js.map