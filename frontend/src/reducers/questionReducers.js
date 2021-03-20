import {
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAIL,
    QUESTION_DETAILS_REQUEST,
    QUESTION_DETAILS_SUCCESS,
    QUESTION_DETAILS_FAIL,
    QUESTION_DELETE_REQUEST,
    QUESTION_DELETE_SUCCESS,
    QUESTION_DELETE_FAIL,
    QUESTION_CREATE_RESET,
    QUESTION_CREATE_FAIL,
    QUESTION_CREATE_SUCCESS,
    QUESTION_CREATE_REQUEST,
    QUESTION_UPDATE_REQUEST,
    QUESTION_UPDATE_SUCCESS,
    QUESTION_UPDATE_FAIL,
    QUESTION_UPDATE_RESET,
    QUESTION_CREATE_REVIEW_REQUEST,
    QUESTION_CREATE_REVIEW_SUCCESS,
    QUESTION_CREATE_REVIEW_FAIL,
    QUESTION_CREATE_REVIEW_RESET,
    QUESTION_EASY_SUCCESS,
    QUESTION_EASY_FAIL,
    QUESTION_EASY_REQUEST,
    QUESTION_MEDIUM_SUCCESS,
    QUESTION_MEDIUM_REQUEST,
    QUESTION_MEDIUM_FAIL,
    QUESTION_HARD_REQUEST,
    QUESTION_HARD_FAIL,
    QUESTION_HARD_SUCCESS,
} from '../constants/questionConstants'

export const questionListReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return { loading: true, questions: [] }
    case QUESTION_LIST_SUCCESS:
      return {
        loading: false,
        questions: action.payload.questions,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case QUESTION_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const questionDetailsReducer = (
  state = { question: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case QUESTION_DETAILS_REQUEST:
      return { ...state, loading: true }
    case QUESTION_DETAILS_SUCCESS:
      return { loading: false, question: action.payload }
    case QUESTION_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const questionDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_DELETE_REQUEST:
      return { loading: true }
    case QUESTION_DELETE_SUCCESS:
      return { loading: false, success: true }
    case QUESTION_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const questionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_CREATE_REQUEST:
      return { loading: true }
    case QUESTION_CREATE_SUCCESS:
      return { loading: false, success: true, question: action.payload }
    case QUESTION_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case QUESTION_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const questionUpdateReducer = (state = { question: {} }, action) => {
  switch (action.type) {
    case QUESTION_UPDATE_REQUEST:
      return { loading: true }
    case QUESTION_UPDATE_SUCCESS:
      return { loading: false, success: true, question: action.payload }
    case QUESTION_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case QUESTION_UPDATE_RESET:
      return { question: {} }
    default:
      return state
  }
}

export const questionReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case QUESTION_CREATE_REVIEW_REQUEST:
      return { loading: true }
    case QUESTION_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case QUESTION_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    case QUESTION_CREATE_REVIEW_RESET:
      return {}
    default:
      return state
  }
}

export const questionEasyReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTION_EASY_REQUEST:
      return { loading: true, questions: [] }
    case QUESTION_EASY_SUCCESS:
      return { loading: false, questions: action.payload }
    case QUESTION_EASY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const questionMediumReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTION_MEDIUM_REQUEST:
      return { loading: true, questions: [] }
    case QUESTION_MEDIUM_SUCCESS:
      return { loading: false, questions: action.payload }
    case QUESTION_MEDIUM_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const questionHardReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case QUESTION_HARD_REQUEST:
      return { loading: true, questions: [] }
    case QUESTION_HARD_SUCCESS:
      return { loading: false, questions: action.payload }
    case QUESTION_HARD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
