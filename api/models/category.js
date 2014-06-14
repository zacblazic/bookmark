var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var category = new Schema({
  name: { type: String, required: true }
});

mongoose.model("Category", category);
