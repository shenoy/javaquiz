const express = require("express");
const jokesController = require("./../controllers/jokesController");

const router = express.Router();

router
  .route("/")
  .get(jokesController.getAllJokes)
  .post(jokesController.createJoke);

router
  .route("/:id")
  .get(jokesController.getJoke)
  .patch(jokesController.updateJoke)
  .delete(jokesController.deleteJoke);

module.exports = router;
