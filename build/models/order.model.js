"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* set date format and stuff */
var date = new Date();
var month = "".concat(date.getMonth() + 1);
var today = "".concat(date.getDate(), "-").concat(month.padStart, "-").concat(date.getFullYear()); // get DD-MM-YYYY

var Orders =
/*#__PURE__*/
function () {
  function Orders() {
    _classCallCheck(this, Orders);

    this.id = null;
    this.customerId = null;
    this.meal = [];
    this.total = null;
    this.date = today;
    this.delivered = false;
  }

  _createClass(Orders, [{
    key: "modifyOrder",
    value: function modifyOrder() {
      this.dateModified = today;
      this.modified = true;
    }
  }]);

  return Orders;
}();

var _default = Orders;
exports.default = _default;
//# sourceMappingURL=order.model.js.map