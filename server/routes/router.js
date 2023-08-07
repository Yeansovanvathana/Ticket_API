const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

// find all users:
route.get("/api/users", controller.findAll);

// create user:
route.post("/api/users", controller.create);

route.delete("/api/users", controller.deleteMany);

module.exports = route;
