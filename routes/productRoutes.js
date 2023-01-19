const express = require("express");
const router = express.Router();
const userController = require("../controllers/productController");

router.get("/lastProduct", userController.getLastProduct);
router.get("/", userController.getAllProducts);
router.get("/brands", userController.getAllBrands);
router.get("/:id", userController.getProduct);

module.exports = router;
