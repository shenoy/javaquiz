const express = require("express");
const viewsController = require("../controllers/viewsController");
const router = express.Router();
router.get("/", viewsController.getRandomQuiz);
router.get("/all", viewsController.getAllQuiz);
router.get("/io", viewsController.getIOQuiz);
router.get("/generics", viewsController.getGenericsQuiz);
router.get("/concurrency", viewsController.getConcurrencyQuiz);
router.get("/date", viewsController.getDateQuiz);
router.get("/jdbc", viewsController.getJdbcQuiz);
router.get("/about", viewsController.getAboutPage);
router.get("/submit", viewsController.getSubmitForm);
router.get("/exceptions", viewsController.getExceptionsQuiz);
router.get("/designpatterns", viewsController.getJavaClassDesignQuiz);
router.get("/advancedclassdesign", viewsController.getAdvancedClassDesignQuiz);
router.get(
  "/functionalprogramming",
  viewsController.getFunctionalProgrammingQuiz
);
router.get("/nio2", viewsController.getNio2Quiz);
module.exports = router;
