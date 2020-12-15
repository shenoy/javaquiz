const express = require("express");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", viewsController.getRandomJoke);
router.get("/all", viewsController.getAllJokes);
router.get("/programming", viewsController.getProgrammingJoke);
router.get("/general", viewsController.getGeneralJoke);
router.get("/knockknock", viewsController.getKnockKnockJoke);
router.get("/about", viewsController.getAboutPage);

router.get("/submit", viewsController.getSubmitForm);

module.exports = router;
