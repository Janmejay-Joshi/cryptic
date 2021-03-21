import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container,Card, Image,Row, Col, Button } from "react-bootstrap";
import Meta from "../components/Meta";
import { listQuestions } from "../actions/questionActions";

const AboutUs = ({ match }) => {
  return (
    <>
      <Meta />
      <Container>
          <Container>
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
          </Container>

          <center><h2>Our Team</h2></center>
<Row>
    <Col>
        <Card>
            <Card.Img src="/w3images/team1.jpg" alt="Jane" fluid/>
            <Card.Body>
                <Card.Text>
                <h2>Jane Doe</h2>
                <p >CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><Button >Contact</Button></p>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
              
    <Col>
        <Card>
            <Card.Img src="/w3images/team1.jpg" alt="Jane" fluid/>
            <Card.Body>
                <Card.Text>
                <h2>Jane Doe</h2>
                <p >CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><Button >Contact</Button></p>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>

    <Col>
        <Card>
            <Card.Img src="/w3images/team1.jpg" alt="Jane" fluid/>
            <Card.Body>
                <Card.Text>
                <h2>Jane Doe</h2>
                <p >CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><Button >Contact</Button></p>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card>
            <Card.Img src="/w3images/team1.jpg" alt="Jane" fluid/>
            <Card.Body>
                <Card.Text>
                <h2>Jane Doe</h2>
                <p >CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><Button >Contact</Button></p>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    <Col>
        <Card>
            <Card.Img src="/w3images/team1.jpg" alt="Jane" fluid/>
            <Card.Body>
                <Card.Text>
                <h2>Jane Doe</h2>
                <p >CEO & Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jane@example.com</p>
                <p><Button >Contact</Button></p>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    </Row>
      </Container>
    </>
  );
};

export default AboutUs;
