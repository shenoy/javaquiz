const Quiz = require("../models/quizModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const quiz = await Quiz.find();
  console.log(quiz);
  // 2) Build template
  res.status(200).render("topic", {
    title: "All",
    quiz,
  });
});

exports.getRandomQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const result = await Quiz.find();
  const rn = Math.floor(Math.random() * result.length);
  quiz = result[rn];
  // 2) Build template
  res.status(200).render("random", {
    title: "Random Joke",
    quiz,
  });
});

exports.getIOQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type === "io");
  // 2) Build template
  res.status(200).render("topic", {
    title: "I/O",
    quiz,
  });
});

exports.getNio2Quiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type === "nio2");
  // 2) Build template
  res.status(200).render("topic", {
    title: "NIO.2",
    quiz,
  });
});

exports.getGenericsQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type.includes("generics"));
  // 2) Build template
  res.status(200).render("topic", {
    title: "generics",
    quiz,
  });
});

exports.getJdbcQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type.includes("jdbc"));
  // 2) Build template
  res.status(200).render("topic", {
    title: "jdbc",
    quiz,
  });
});

exports.getDateQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type.includes("date"));
  // 2) Build template
  res.status(200).render("topic", {
    title: "date/time",
    quiz,
  });
});

exports.getExceptionsQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type.includes("ceptions"));
  // 2) Build template
  res.status(200).render("topic", {
    title: "Exceptions",
    quiz,
  });
});

exports.getFunctionalProgrammingQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type.includes("ctional"));
  // 2) Build template
  res.status(200).render("topic", {
    title: "Functional Programming",
    quiz,
  });
});

exports.getAdvancedClassDesignQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type.includes("dvanced"));
  // 2) Build template
  res.status(200).render("topic", {
    title: "Adv Class Design",
    quiz,
  });
});

exports.getJavaClassDesignQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type.includes("design"));
  // 2) Build template
  res.status(200).render("topic", {
    title: "Java Class Design",
    quiz,
  });
});

exports.getConcurrencyQuiz = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allQuiz = await Quiz.find();
  const quiz = allQuiz.filter((x) => x.type.includes("currency"));
  // 2) Build template
  res.status(200).render("topic", {
    title: "Concurrency",
    quiz,
  });
});
exports.getQuiz = catchAsync(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);

  if (!quiz) {
    return next(new AppError("There is no quiz with that id.", 404));
  }

  // 2) Build template
  // 3) Render template using data from 1)
  res.status(200).render("joke", {
    title: `${quiz.type} Joke`,
    quiz,
  });
});

exports.getSubmitForm = (req, res) => {
  res.status(200).render("submit", {
    title: "Submit your quiz",
  });
};

exports.getRadio = (req, res) => {
  res.status(200).render("radiobutton", {
    title: "quiz",
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about", {
    title: "About javaquiz",
  });
};

exports.updateQuizData = catchAsync(async (req, res, next) => {
  const updatedQuiz = await Quiz.findByIdAndUpdate(
    req.joke.id,
    {
      setup: req.body.question,
      punchline: req.body.answer,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).render("update", {
    title: "update",
    user: updatedQuiz,
  });
});
