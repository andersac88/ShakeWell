const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Beverages collection and inserts the beverages below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/shakewell"
);

const beverageSeed = [
  {
    name: "Orange Juice",
    shake: true
  }
];

db.Beverage
  .deleteMany({})
  .then(() => db.Beverage.collection.insertMany(beverageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
