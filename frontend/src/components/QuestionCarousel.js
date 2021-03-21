import React, { useEffect, useState } from "react";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Question from "./Question";
import Message from "./Message";
import { listEasyQuestions,listMediumQuestions, listHardQuestions } from "../actions/questionActions";

const QuestionCarousel = () => {
    const dispatch = useDispatch();

    const questionEasy = useSelector((state) => state.questionEasy);
    const questionMedium = useSelector((state) => state.questionMedium);
    const questionHard = useSelector((state) => state.questionHard);

    useEffect(() => {
        dispatch(listMediumQuestions());
        dispatch(listEasyQuestions());
        dispatch(listHardQuestions());
    }, [dispatch]);

    function ControlledTabs() {
        const [key, setKey] = useState("medium");

        return (
            <Tabs
                id="Difficulty Control"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                variant="pills"
            >
                <Tab eventKey="easy" title="Easy">
                    <Row>
                        {questionEasy.questions.map((question) => (
                            <Col key={question._id} sm={10} md={5} lg={4} xl={3}>
                                <Question question={question} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="medium" title="Medium">
                    <Row>
                        {questionMedium.questions.map((question) => (
                            <Col key={question._id} sm={12} md={6} lg={4} xl={3}>
                                <Question question={question} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
                <Tab eventKey="hard" title="Hard">
                    <Row>
                        {questionHard.questions.map((question) => (
                            <Col key={question._id} sm={12} md={6} lg={4} xl={3}>
                                <Question question={question} />
                            </Col>
                        ))}
                    </Row>
                </Tab>
            </Tabs>
        );
    }
    return questionEasy.loading ? (
        <Loader />
    ) : questionEasy.error ? (
        <Message variant="danger">{questionEasy.error}</Message>
    ) : (
        <ControlledTabs/>
    );
};

export default QuestionCarousel;
