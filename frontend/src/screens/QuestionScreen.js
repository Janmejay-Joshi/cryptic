import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Image,
    Tabs,
    Container,
    Tab,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
    listQuestionDetails,
} from "../actions/questionActions";


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
                    <Container>
                    <strong><h1>{question.name}</h1></strong>
                    <h5>{question.prompt}</h5>
                    <br/><br/>
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
            <Link className="btn btn-light my-3" to="/Q">
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
