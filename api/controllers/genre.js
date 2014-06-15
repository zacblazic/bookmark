var mongoose = require("mongoose"),
    Genre = mongoose.model("Genre");

exports.find = function(req, res) {
  Genre.find(function(err, genres) {
    if (err) return res.send(404);
    res.send(genres);
  });
};

exports.findById = function(req, res) {
  Genre.findById(req.params.id, function(err, genre) {
    if (err) return res.send(404);
    res.send(genre);
  });
};

exports.create = function(req, res) {
  var genre = new Genre({
    name: req.body.name
  });

  genre.save(function(err) {
    if (err) return res.send(400);
    res.send(200);
  });
};

exports.update = function(req, res) {
  Genre.findById(req.params.id, function(err, genre) {
    if (err) return res.send(404);

    genre.name = req.body.name;

    genre.save(function(err) {
      if (err) return res.send(400);
      res.send(200);
    });
  });
};

exports.delete = function(req, res) {
  Genre.findById(req.params.id, function(err, genre) {
    if (err) return res.send(404);

    genre.remove(function(err) {
      if (err) return req.send(400);
      res.send(200);
    });
  });
};
