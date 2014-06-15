var mongoose = require("mongoose"),
    Book = mongoose.model("Book");

exports.find = function(req, res) {
  Book.find(function(err, books) {
    if (err) return res.send(404);
    res.send(books);
  });
};

exports.findById = function(req, res) {
  Book.findById(req.params.id, function(err, book){
    if (err) return res.send(404);
    res.send(book);
  });
};

exports.create = function(req, res) {
  var book = new Book({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    genres: req.body.genres,
    category: req.body.category
  });

  book.save(function(err) {
    if (err) return res.send(400);
    res.send(200);
  });
};

exports.update = function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    if (err) return res.send(404);

    book.title = req.body.title;
    book.author = req.body.author;
    book.isbn = req.body.isbn;
    book.genres = req.body.genres;
    book.category = req.body.category;

    book.save(function(err) {
      if (err) return res.send(400);
      res.send(200);
    });
  });
};

exports.delete = function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    if (err) return res.send(404);

    book.remove(function(err) {
      if (err) return res.send(400);
      res.send(200);
    });
  });
};
