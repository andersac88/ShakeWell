const router = require("express").Router();
const beverageRoutes = require("./beverages");

// Book routes
router.use("/beverages", beverageRoutes);

module.exports = router;
