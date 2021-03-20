import asyncHandler from 'express-async-handler'
import Question from '../models/questionModel.js'

// @desc    Fetch all questions
// @route   GET /api/questions
// @access  Public
const getQuestions = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Question.countDocuments({ ...keyword })
  const questions = await Question.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ questions, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single question
// @route   GET /api/questions/:id
// @access  Public
const getQuestionById = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id)

  if (question) {
    res.json(question)
  } else {
    res.status(404)
    throw new Error('Question not found')
  }
})

// @desc    Delete a question
// @route   DELETE /api/questions/:id
// @access  Private/Admin
const deleteQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id)

  if (question) {
    await question.remove()
    res.json({ message: 'Question removed' })
  } else {
    res.status(404)
    throw new Error('Question not found')
  }
})

// @desc    Create a question
// @route   POST /api/questions
// @access  Private/Admin
const createQuestion = asyncHandler(async (req, res) => {
  const question = new Question({
    user: req.user._id,
    name: 'Sample name',
    image: '/images/sample.jpg',
    prompt: 'Sample prompt',
    category: 'Sample category',
    sollution: "Sample",
    description: "something",
    difficulty: 0,
    hints:"sample",
  })

  const createdQuestion = await question.save()
  res.status(201).json(createdQuestion)
})

// @desc    Update a question
// @route   PUT /api/questions/:id
// @access  Private/Admin
const updateQuestion = asyncHandler(async (req, res) => {
  const {
    name,
    difficulty,
    description,
    image,
    prompt,
    category,
    sollution,
    hints,
  } = req.body

  const question = await Question.findById(req.params.id)

  if (question) {
    question.name = name
    question.difficulty = difficulty
    question.description = description
    question.image = image
    question.hints = hints 
    question.prompt = prompt
    question.category = category
    question.sollution = sollution

    const updatedQuestion = await question.save()
    res.json(updatedQuestion)
  } else {
    res.status(404)
    throw new Error('Question not found')
  }
})

// @desc    Create new review
// @route   POST /api/questions/:id/reviews
// @access  Private
const createQuestionReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const question = await Question.findById(req.params.id)

  if (question) {
    const alreadyReviewed = question.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Question already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    question.reviews.push(review)

    question.numReviews = question.reviews.length

    question.rating =
      question.reviews.reduce((acc, item) => item.rating + acc, 0) /
      question.reviews.length

    await question.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Question not found')
  }
})

// @desc    Get top rated questions
// @route   GET /api/questions/easy
// @access  Public
const getEasyQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({ difficulty:0 })

  res.json(questions)
})

// @desc    Get top rated questions
// @route   GET /api/questions/easy
// @access  Public
const getMediumQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({ difficulty:1 })

  res.json(questions)
})

// @desc    Get top rated questions
// @route   GET /api/questions/easy
// @access  Public
const getHardQuestions = asyncHandler(async (req, res) => {
    const questions = await Question.find({ difficulty:2 })

  res.json(questions)
})

export {
    getQuestions,
    getQuestionById,
    deleteQuestion,
    createQuestion,
    updateQuestion,
    createQuestionReview,
    getEasyQuestions,
    getMediumQuestions,
    getHardQuestions,
}
