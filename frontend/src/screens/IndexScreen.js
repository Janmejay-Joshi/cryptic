import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Image } from "react-bootstrap";
import Meta from "../components/Meta";
import Button from "react-bootstrap/Button";
import { listQuestions } from "../actions/questionActions";

const IndexScreen = ({ match }) => {
  return (
    <>
      <Meta />
      <Container>
        <center>
          <Image src="uploads\blurred.jpeg" fluid />
        </center>
        <h2>
          <center>
            <Button href="/Q" variant="outline-secondary">
              Lets go Cryptic->
            </Button>{" "}
          </center>
        </h2>
        <h2>
          <u>Cryptography</u>
        </h2>
        <p>What is Cryptography?</p>
        <p>
          Cryptography is a method of protecting information and communications
          through the use of codes, so that only those for whom the information
          is intended can read and process it. The prefix "crypt-" means
          "hidden" or "vault" -- and the suffix "-graphy" stands for "writing."
          Cryptography teasers are phrases, expressions, quotes or lists that
          have been encoded in some way (frequently replacing letters with other
          letters, although other methods are acceptable). You need to figure
          out the encoding method and then decode the message to find the
          answer. Cryptography teasers generally fall into three categories,
          Cryptograms, Cryptolists and Cryptomath.
        </p>
        <h1>
          <u>
            <b>Cryptic</b>
          </u>
        </h1>
        <p>
          <b>CYRPTIC</b> is a web interface for solving puzzles. Cryptic
          contains brain storming cryptographic teasers which are fun to solve
          and will improve your cryptographic and analytical skills. This
          platform will allow you to choose the levels that are EASY,MEDIUM,
          HARD according to your choice. ENJOY CRYPTING !!
        </p>
      </Container>
    </>
  );
};

export default IndexScreen;
