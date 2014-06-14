var fs = require("fs"),
    express = require("express"),
    mongoose = require("mongoose");

// Database
var db = mongoose.connect("mongodb://localhost/bookmark");

// Bootstrap models
var modelsPath = __dirname + "/models";
fs.readdirSync(modelsPath).forEach(function (file) {
  if (~file.indexOf(".js")) {
    require(modelsPath + "/" + file);
  }
});

// Configure express
var app = express();
require("./config/express")(app);
require("./config/routes")(app);

// Listen
var port = 4222;
app.listen(port);
console.log("Listening on port: " + port);

// Expose
exports.app = app;
