const router = require("express").Router();
const productRoutes = require("./products");
const tournamentRoutes = require("./dummytournaments");
const leagueRoutes = require("./dummyleagues");
const userRoutes = require("./users");

// Product routes
router.use("/products", productRoutes);

// tournament routes
router.use("/tournaments", tournamentRoutes);

// league routes
router.use("/leagues", leagueRoutes);

router.use("/users", userRoutes);

module.exports = router;
