const router = require("express").Router();

const noteControllers = require("../../controllers/noteController.js");

router.post("/", noteControllers.create);
router.get("/", noteControllers.findAll);

router
  .route("/:id")
  .get(noteControllers.find)
  .delete(noteControllers.delete);

module.exports = router;
