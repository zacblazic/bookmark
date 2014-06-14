var bodyParser = require("body-parser"),
    methodOverride = require("method-override");

module.exports = function(app) {
  app.use(bodyParser());
  app.use(methodOverride());

  // Handle errors that we can't
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500, "Well done, you broke it.");
  });
};
