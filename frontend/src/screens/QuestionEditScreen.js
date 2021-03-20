import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listQuestionDetails, updateQuestion } from '../actions/questionActions'
import { QUESTION_UPDATE_RESET } from '../constants/questionConstants'

const QuestionEditScreen = ({ match, history }) => {
  const questionId = match.params.id

  const [name, setName] = useState('')
  const [difficulty, setDifficulty] = useState(0)
  const [image, setImage] = useState('')
  const [prompt, setPrompt] = useState('')
  const [hints, setHints] = useState('')
  const [category, setCategory] = useState('')
  const [sollution, setSollution] = useState("")
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const questionDetails = useSelector((state) => state.questionDetails)
  const { loading, error, question } = questionDetails

  const questionUpdate = useSelector((state) => state.questionUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = questionUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: QUESTION_UPDATE_RESET })
      history.push('/admin/questionlist')
    } else {
      if (!question.name || question._id !== questionId) {
        dispatch(listQuestionDetails(questionId))
      } else {
        setName(question.name)
        setDifficulty(question.difficulty)
        setImage(question.image)
        setPrompt(question.prompt)
        setHints(question.hints)
        setCategory(question.category)
        setSollution(question.sollution)
        setDescription(question.description)
      }
    }
  }, [dispatch, history, questionId, question, successUpdate])

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateQuestion({
        _id: questionId,
        name,
        difficulty,
        image,
        prompt,
        hints,
        category,
        description,
        sollution,
      })
    )
  }

  return (
    <>
      <Link to='/admin/questionlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Question</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='difficulty'>
              <Form.Label>Difficulty</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter difficulty'
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId='prompt'>
              <Form.Label>Prompt</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter Prompt'
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='hint'>
              <Form.Label>Hints</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter Hints'
                value={hints}
                onChange={(e) => setHints(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='sollution'>
              <Form.Label>Sollution</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter sollution'
                value={sollution}
                onChange={(e) => setSollution(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default QuestionEditScreen
