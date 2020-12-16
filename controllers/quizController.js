const Quiz = require("../models/quizModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");

exports.getAllQuiz = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Quiz.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const quiz = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: quiz.length,
    data: {
      quiz,
    },
  });
});

exports.getQuiz = catchAsync(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);

  if (!quiz) {
    return next(new AppError("No quiz found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      quiz,
    },
  });
});

exports.createQuiz = catchAsync(async (req, res, next) => {
  const newQuiz = await Quiz.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      quiz: newQuiz,
    },
  });
});

exports.updateQuiz = catchAsync(async (req, res, next) => {
  const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!quiz) {
    return next(new AppError("No quiz found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      quiz,
    },
  });
});

exports.deleteQuiz = catchAsync(async (req, res, next) => {
  const quiz = await Quiz.findByIdAndDelete(req.params.id);

  if (!quiz) {
    return next(new AppError("No quiz found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
