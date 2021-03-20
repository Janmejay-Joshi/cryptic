import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import {
  listQuestionDetails,
  createQuestionReview,
} from '../actions/questionActions'
import { QUESTION_CREATE_REVIEW_RESET } from '../constants/questionConstants'

const QuestionScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const dispatch = useDispatch()

  const questionDetails = useSelector((state) => state.questionDetails)
  const { loading, error, question } = questionDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const questionReviewCreate = useSelector((state) => state.questionReviewCreate)
  const {
    success: successQuestionReview,
    loading: loadingQuestionReview,
    error: errorQuestionReview,
  } = questionReviewCreate

  useEffect(() => {
    if (successQuestionReview) {
      setRating(0)
      setComment('')
    }
    if (!question._id || question._id !== match.params.id) {
      dispatch(listQuestionDetails(match.params.id))
      dispatch({ type: QUESTION_CREATE_REVIEW_RESET })
    }
  }, [dispatch, match, successQuestionReview])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createQuestionReview(match.params.id, {
        rating,
        comment,
      })
    )
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Meta title={question.name} />
          <Row>
            <Col md={6}>
              <Image src={question.image} alt={question.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{question.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={question.rating}
                    text={`${question.numReviews} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${question.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {question.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>${question.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {question.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {question.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(question.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      disabled={question.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default QuestionScreen
