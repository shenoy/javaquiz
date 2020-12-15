const Joke = require("../models/jokesModel");
const catchAsync = require("./../utils/catchAsync");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");

exports.getAllJokes = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Joke.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const jokes = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: jokes.length,
    data: {
      jokes,
    },
  });
});

exports.getJoke = catchAsync(async (req, res, next) => {
  const joke = await Joke.findById(req.params.id);

  if (!joke) {
    return next(new AppError("No joke found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      joke,
    },
  });
});

exports.createJoke = catchAsync(async (req, res, next) => {
  const newJoke = await Joke.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      joke: newJoke,
    },
  });
});

exports.updateJoke = catchAsync(async (req, res, next) => {
  const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!joke) {
    return next(new AppError("No tour found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      joke,
    },
  });
});

exports.deleteJoke = catchAsync(async (req, res, next) => {
  const joke = await Joke.findByIdAndDelete(req.params.id);

  if (!joke) {
    return next(new AppError("No tour found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
