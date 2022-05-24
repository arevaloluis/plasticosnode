const express = require("express");
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const warehouseController = require("../controllers/warehouseController");
const productsController = require("../controllers/productsController");

const router = express.Router()

router.get("/", homeController.index);
router.get("/users", userController.index);
router.get("/warehouse", warehouseController.index);
router.get("/products", productsController.index);

module.exports = router; 
