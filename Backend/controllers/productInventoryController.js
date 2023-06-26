const BaseController = require("./baseController");
const ProductInventoryModel = require("../models/productInventoryModel");
class ProductInventory extends BaseController {
  constructor() {
    super(ProductInventoryModel, ProductInventory);
  }
}
module.exports = new ProductInventory();
