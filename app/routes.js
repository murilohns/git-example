const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index");
});

routes.get("/calculate", (req, res) => {
  if (req.body.operator == "+") {
    result = req.body.number1 + req.body.number2;
  }

  res.render("index");
});


module.exports = routes;
