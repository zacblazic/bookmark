var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var genre = new Schema({
  name: { type: String, required: true }
});

mongoose.model("Genre", genre);
