const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beverageSchema = new Schema({
  name: { type: String, required: true },
  shake: {type: Boolean, required: true}

});

const Beverage = mongoose.model("Beverage", beverageSchema);

module.exports = Beverage;
