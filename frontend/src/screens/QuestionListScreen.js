import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listQuestions,
  deleteQuestion,
  createQuestion,
} from '../actions/questionActions'
import { QUESTION_CREATE_RESET } from '../constants/questionConstants'

const QuestionListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const questionList = useSelector((state) => state.questionList)
  const { loading, error, questions, page, pages } = questionList

  const questionDelete = useSelector((state) => state.questionDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = questionDelete

  const questionCreate = useSelector((state) => state.questionCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    question: createdQuestion,
  } = questionCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch({ type: QUESTION_CREATE_RESET })

    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/admin/question/${createdQuestion._id}/edit`)
    } else {
      dispatch(listQuestions('', pageNumber))
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdQuestion,
    pageNumber,
  ])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteQuestion(id))
    }
  }

  const createQuestionHandler = () => {
    dispatch(createQuestion())
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Questions</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createQuestionHandler}>
            <i className='fas fa-plus'></i> Create Question
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DIFFICULTY</th>
                <th>CATEGORY</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question) => (
                <tr key={question._id}>
                  <td>{question._id}</td>
                  <td>{question.name}</td>
                  <td>{question.difficulty}</td>
                  <td>{question.category}</td>
                  <td>
                    <LinkContainer to={`/admin/question/${question._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(question._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  )
}

export default QuestionListScreen
