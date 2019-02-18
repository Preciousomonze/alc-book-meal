/* set date format and stuff */

const date = new Date();
const month = `${date.getMonth() + 1}`;
const today = `${date.getDate()}-${month.padStart(2, '0')}-${date.getFullYear()}`;// get DD-MM-YYYY

class Orders {
  constructor() {
    this.id = null;
    this.customerId = null;
    this.meal = [];
    this.total = null;
    this.date = today;
    this.delivered = false;
  }

  modifyOrder() {
    this.dateModified = today;
    this.modified = true;
  }
}

export default Orders;
