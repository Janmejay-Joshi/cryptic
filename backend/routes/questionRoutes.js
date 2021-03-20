import express from 'express'
const router = express.Router()
import {
    getQuestions,
    getQuestionById,
    deleteQuestion,
    createQuestion,
    updateQuestion,
    createQuestionReview,
    getEasyQuestions,
    getMediumQuestions,
    getHardQuestions,
} from '../controllers/questionController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getQuestions).post(protect, admin, createQuestion)
router.route('/:id/reviews').post(protect, createQuestionReview)
router.get('/easy', getEasyQuestions)
router.get('/medium',getMediumQuestions)
router.get('/hard',getHardQuestions)
router
  .route('/:id')
  .get(getQuestionById)
  .delete(protect, admin, deleteQuestion)
  .put(protect, admin, updateQuestion)

export default router
