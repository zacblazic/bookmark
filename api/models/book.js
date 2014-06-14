var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var book = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  genres: [{ type: Schema.ObjectId, ref: "Genre" }],
  category: { type: Schema.ObjectId, ref: "Category" }
});

mongoose.model("Book", book);
