const router = require("express").Router();
const clearRoutes = require("./clearRoutes.js");
const noteRoutes = require("./noteRoutes.js");
const headlineRoutes = require("./headlineRoutes.js");

router.use("/clear", clearRoutes);
router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);

module.exports = router;
