const express = require("express");
const userController = require("../controllers/userController");
const usersRoutes = express.Router()

usersRoutes.get("/", userController.index);

module.exports = usersRoutes; 
