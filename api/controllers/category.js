var mongoose = require("mongoose"),
    Category = mongoose.model("Category");

exports.find = function(req, res) {
  Category.find(function(err, categories) {
    if (err) return res.send(404);
    res.send(categories);
  });
};

exports.findById = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    if (err) return res.send(404);
    res.send(category);
  });
};

exports.create = function(req, res) {
  var category = new Category({
    name: req.body.name
  });

  category.save(function(err) {
    if (err) return res.send(400);
    res.send(200);
  });
};

exports.update = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    if (err) return res.send(404);

    category.name = req.body.name;

    category.save(function(err) {
      if (err) return res.send(400);
      res.send(200);
    });
  });
};

exports.delete = function(req, res) {
  Category.findById(req.params.id, function(err, category) {
    if (err) return res.send(404);

    category.delete(function(err) {
      if (err) return req.send(400);
      res.send(200);
    });
  });
};
