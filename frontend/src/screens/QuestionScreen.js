import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import {
    Image,
    Tabs,
    Container,
    Overlay,
    Tab,
} from "react-bootstrap";
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
    function showSolution(){
        var x = document.getElementById("solution")
        if(x.style.display=="none"){
            x.style.display = "block"
        }else{
            x.style.display = "none"
        }
    }
        return (
            <Tabs
                id="Difficulty Control"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="prompt" title="Prompt">
                    <Container>
                    <strong><h1>{question.name}</h1></strong>
                    <h5>{question.prompt}</h5>
                    <Image src={question.image}/>
                    </Container>
                </Tab>
                <Tab eventKey="hints" title="Hints">
                    <Container>
                    <h3>{question.hints}</h3>
                    </Container>
                </Tab>
                <Tab eventKey="sollution" title="Sollution">
                    <Container>
                        <h3>{question.sollution}</h3>
                    </Container>
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
