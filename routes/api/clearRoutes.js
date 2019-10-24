const router = require("express").Router();

const clearController = require("../../controllers/clearController.js");

router.get("/", clearController.clearDB);

module.exports = router;
