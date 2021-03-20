import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  questionListReducer,
  questionDetailsReducer,
  questionDeleteReducer,
  questionCreateReducer,
  questionUpdateReducer,
  questionReviewCreateReducer,
  questionEasyReducer,
  questionMediumReducer,
  questionHardReducer,
} from './reducers/questionReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  questionList: questionListReducer,
  questionDetails: questionDetailsReducer,
  questionDelete: questionDeleteReducer,
  questionCreate: questionCreateReducer,
  questionUpdate: questionUpdateReducer,
  questionReviewCreate: questionReviewCreateReducer,
  questionEasy: questionEasyReducer,
  questionMedium: questionMediumReducer,
  questionHard: questionHardReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
