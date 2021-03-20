import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Question = ({ question }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/question/${question._id}`}>
                <Card.Img src={question.image} variant="top" fluid/>
            </Link>

            <Card.Body>
                <Link to={`/question/${question._id}`}>
                    <Card.Title as="h4">
                        <strong>{question.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="h6">{question.description}</Card.Text>

                <Card.Text>
                    {question.category}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Question;
