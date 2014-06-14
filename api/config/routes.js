var book = require("../controllers/book"),
    category = require("../controllers/category"),
    genre = require("../controllers/genre");

module.exports = function(app) {
  // Default
  app.get("/api", function(req, res) {
    res.send("Bookmark API");
  });

  // Book
  app.get("/api/books", book.find);
  app.get("/api/book/:id", book.findById);
  app.post("/api/books", book.create);
  app.put("/api/book/:id", book.update);
  app.delete("/api/book/:id", book.delete);

  // Genre
  app.get("/api/genres", genre.find);
  app.get("/api/genre/:id", genre.findById);
  app.post("/api/genres", genre.create);
  app.put("/api/genre/:id", genre.update);
  app.delete("/api/genre/:id", genre.delete);

  // Category
  app.get("/api/categories", category.find);
  app.get("/api/category/:id", category.findById);
  app.post("/api/categories", category.create);
  app.put("/api/category/:id", category.update);
  app.delete("/api/category/:id", category.delete);
};
