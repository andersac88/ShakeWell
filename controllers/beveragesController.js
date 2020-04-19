const db = require("../models");

// Defining methods for the BeveragesController
module.exports = {
  findAll: function(req, res) {
    db.Beverage
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
