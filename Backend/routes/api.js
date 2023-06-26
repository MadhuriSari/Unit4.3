var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const productInventoryController = require("../controllers/productInventoryController");

router.post("/add-product", async (req, res) => {
  data = req.body;
  data.product_id = uuidv4();
  productInventoryController.create(data, (err, productResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: productResponse,
    });
  });
});

router.post("/update-product", (req, res) => {
  let data = req.body;
  productInventoryController.findOneAndUpdate(
    { product_id: req.body.product_id },
    data,
    (err, updatedProduct) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedProduct,
      });
    }
  );
});

router.post("/find-product/:id", (req, res) => {
  productInventoryController.find(
    { product_id: req.params.id },
    (err, productDetails) => {
      if (err) {
        return res.send({ response: err });
      }
      res.json({
        response: productDetails,
      });
    }
  );
});

router.post("/delete-product", (req, res) => {
  productInventoryController.findOneAndRemove(
    { product_id: req.body.product_id },
    (err, deletedProduct) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedProduct,
      });
    }
  );
});

router.get("/find-al-products", (req, res) => {
  productInventoryController.find({}, (err, allProductDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allProductDetails,
    });
  });
});

module.exports = router;
