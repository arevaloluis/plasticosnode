const express = require("express");
const homeController = require("../controllers/homeController");
const router = express.Router()

router.get("/", homeController.index);
router.get("/users", homeController.index);
router.get("/warehouse", homeController.index);

module.exports = router; 
