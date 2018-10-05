const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const path = require("path");
const routes = require("./app/routes");

const app = express();

app.use(express.static(path.resolve("app", "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "njk");

nunjucks.configure(path.resolve("app", "views"), {
  autoescape: true,
  express: app
});

app.use("/", routes);

app.listen(3000);
