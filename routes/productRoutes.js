const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/ventas", productController.getVentas);
router.get("/lastProduct", productController.getLastProduct);
router.get("/", productController.getAllProducts);
router.get("/brands", productController.getAllBrands);
router.get("/:id", productController.getProduct);

module.exports = router;
