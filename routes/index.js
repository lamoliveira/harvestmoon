const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
console.log(apiRoutes);
// API Routes
router.use("/api", apiRoutes);
// console.log("router");
// console.log(router);
// If no API routes are hit, send the React app

module.exports = router;
