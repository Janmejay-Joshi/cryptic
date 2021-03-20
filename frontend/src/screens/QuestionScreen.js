import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Image,
    Tabs,
    Tab,
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
    function ControlledTabs() {
        const [key, setKey] = useState("prompt");

        return (
            <Tabs
                id="Difficulty Control"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="prompt" title="Prompt">
                    <h3>{question.prompt}</h3>
                    <Image src={question.image}/>
                </Tab>
                <Tab eventKey="hints" title="Hints">
                    <h3>{question.hints}</h3>
                </Tab>
                <Tab eventKey="sollution" title="Sollution">
                    <h3>{question.sollution}</h3>
                </Tab>
            </Tabs>
        );
    }
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
                <ControlledTabs/>
            )}
        </>
    );
};

export default QuestionScreen;
