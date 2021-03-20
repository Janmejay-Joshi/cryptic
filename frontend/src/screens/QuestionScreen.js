import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import {
    listQuestionDetails,
    createQuestionReview,
} from "../actions/questionActions";
import { QUESTION_CREATE_REVIEW_RESET } from "../constants/questionConstants";

const QuestionScreen = ({ history, match }) => {
    const dispatch = useDispatch();

    const questionDetails = useSelector((state) => state.questionDetails);
    const { loading, error, question } = questionDetails;

    useEffect(() => {
        if (!question._id || question._id !== match.params.id) {
            dispatch(listQuestionDetails(match.params.id));
        }
    }, [dispatch, match]);

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <>
                    <Meta title={question.name} />
                    <Row>
                        <Col md={6}>
                            <Image
                                src={question.image}
                                alt={question.name}
                                fluid
                            />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3>{question.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {question.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
};

export default QuestionScreen;
