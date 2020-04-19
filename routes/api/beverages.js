const router = require("express").Router();
const beveragesController = require("../../controllers/beveragesController");

// Matches with "/api/books"
router.route("/")
  .get(beveragesController.findAll)


module.exports = router;
