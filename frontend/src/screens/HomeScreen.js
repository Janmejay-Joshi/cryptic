import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Question from '../components/Question'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import QuestionCarousel from '../components/QuestionCarousel'
import Meta from '../components/Meta'
import { listQuestions } from '../actions/questionActions'
import About from '../screens/About'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const questionList = useSelector((state) => state.questionList)
  const { loading, error, questions, page, pages } = questionList

  useEffect(() => {
    dispatch(listQuestions(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      {!keyword ? (
        <QuestionCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}<About />
      {(<Link to='/About' className='btn btn-light'>
        
      </Link>)}
    </>
  )
}

export default HomeScreen
