var mongoose = require("mongoose");

var productInventorySchema = mongoose.Schema({
  product_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const productInventory = mongoose.model(
  "productInventory",
  productInventorySchema
);
module.exports = productInventory;
