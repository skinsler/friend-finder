const express = require("express");

const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", [apiRoutes, htmlRoutes]);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  