var bodyParser = require("body-parser"),
    methodOverride = require("method-override");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

module.exports = function(app) {
  app.use(bodyParser());
  app.use(methodOverride());
  app.use(allowCrossDomain);

  // Handle errors that we can't
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.send(500, "Well done, you broke it.");
  });
};
