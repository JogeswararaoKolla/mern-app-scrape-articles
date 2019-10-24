const router = require("express").Router();
const headlineController = require("../../controllers/headlineController.js");

router.get("/", headlineController.findAll);
router.post("/", headlineController.create);

router
  .route("/:id")
  .delete(headlineController.delete)
  .put(headlineController.update);

module.exports = router;
