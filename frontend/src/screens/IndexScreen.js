import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Image } from "react-bootstrap";
import Meta from "../components/Meta";
import { listQuestions } from "../actions/questionActions";

const IndexScreen = ({ match }) => {
    return (
        <>
            <Meta />
            <Container>
            <center>
            <Image src="uploads/password-cracking-techniques-750x375.jpg" fluid/>
            </center>
            </Container>
        </>
    );
};

export default IndexScreen;
