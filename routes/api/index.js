const router = require("express").Router();
const bookRoutes = require("./books");
const tournamentRoutes = require("./tournaments");
const leagueRoutes = require("./leagues");
const userRoutes = require("./users");

// Book routes
router.use("/books", bookRoutes);

// tournament routes
router.use("/tournaments", tournamentRoutes);

// league routes
router.use("/leagues", leagueRoutes);

router.use("/users", userRoutes);

module.exports = router;
