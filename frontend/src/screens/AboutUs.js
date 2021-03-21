import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Image } from "react-bootstrap";
import Meta from "../components/Meta";
import Button from "react-bootstrap/Button";
import { listQuestions } from "../actions/questionActions";

const AboutUs = ({ match }) => {
  return (
    <>
      <Meta />
      <Container></Container>
    </>
  );
};

export default AboutUs;
