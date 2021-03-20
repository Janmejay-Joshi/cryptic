import axios from 'axios'
import {
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAIL,
    QUESTION_DETAILS_REQUEST,
    QUESTION_DETAILS_SUCCESS,
    QUESTION_DETAILS_FAIL,
    QUESTION_DELETE_SUCCESS,
    QUESTION_DELETE_REQUEST,
    QUESTION_DELETE_FAIL,
    QUESTION_CREATE_REQUEST,
    QUESTION_CREATE_SUCCESS,
    QUESTION_CREATE_FAIL,
    QUESTION_UPDATE_REQUEST,
    QUESTION_UPDATE_SUCCESS,
    QUESTION_UPDATE_FAIL,
    QUESTION_CREATE_REVIEW_REQUEST,
    QUESTION_CREATE_REVIEW_SUCCESS,
    QUESTION_CREATE_REVIEW_FAIL,
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
import { logout } from './userActions'

export const listQuestions = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: QUESTION_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/questions?keyword=${keyword}&pageNumber=${pageNumber}`
    )

    dispatch({
      type: QUESTION_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: QUESTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listQuestionDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/questions/${id}`)

    dispatch({
      type: QUESTION_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: QUESTION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteQuestion = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUESTION_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/questions/${id}`, config)

    dispatch({
      type: QUESTION_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: QUESTION_DELETE_FAIL,
      payload: message,
    })
  }
}

export const createQuestion = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUESTION_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/questions`, {}, config)

    dispatch({
      type: QUESTION_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: QUESTION_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateQuestion = (question) => async (dispatch, getState) => {
  try {
    dispatch({
      type: QUESTION_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/questions/${question._id}`,
      question,
      config
    )

    dispatch({
      type: QUESTION_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: QUESTION_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: QUESTION_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const createQuestionReview = (questionId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: QUESTION_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/questions/${questionId}/reviews`, review, config)

    dispatch({
      type: QUESTION_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: QUESTION_CREATE_REVIEW_FAIL,
      payload: message,
    })
  }
}

export const listEasyQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_EASY_REQUEST })

    const { data } = await axios.get(`/api/questions/easy`)

    dispatch({
      type: QUESTION_EASY_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: QUESTION_EASY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listMediumQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_MEDIUM_REQUEST })

    const { data } = await axios.get(`/api/questions/medium`)

    dispatch({
      type: QUESTION_MEDIUM_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: QUESTION_MEDIUM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const listHardQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: QUESTION_HARD_REQUEST })

    const { data } = await axios.get(`/api/questions/hard`)

    dispatch({
      type: QUESTION_HARD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: QUESTION_HARD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
