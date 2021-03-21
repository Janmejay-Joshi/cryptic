import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Meta from "../components/Meta";

const AboutUs = ({ match }) => {
  return (
    <>
      <Meta />
      <Container>
        <Container>
          <h1>About Us</h1>
          <p>
            We are a team of 5 members, 1st year students from{" "}
            <b>MADHAV INSTITUTE OF TECHNOLOGY AND SCIENCE, GWALIOR, MADHYAPRADESH</b>. We collaborated
            to create this project{" "}
          </p>
        </Container>

        <center>
          <h2>Our Team</h2>
        </center>
        <Row>
          <Col>
            <Card>
              <Card.Img
                src="uploads\members\janmejay.jpeg"
                alt="Janmejay"
                fluid
              />
              <Card.Body>
                <Card.Text>
                  <h2>Janmejay Joshi</h2>
                  <p>Full satck developer</p>
                  <p>Avid LINUX enthusiast, Part-time gamer</p>
                  <p>janmejayjoshi2002@gmail.com</p>
                  <p>
                    <Button variant="success"href="https://www.instagram.com/janmejayjoshi/">
                      Contact
                    </Button>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img
                src="uploads\members\Anishka.jpeg"
                alt="Anishka"
                fluid
              />
              <Card.Body>
                <Card.Text>
                  <h2>Anishka Soni</h2>
                  <p>Team-leader & Content writer</p>
                  <p>Interest in content writing and graphic designing</p>
                  <p>anishkasoni2000@gmail.com</p>
                  <p>
                    <Button variant="success"href="https://www.instagram.com/_the_ani_/">
                      Contact
                    </Button>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img src="uploads\members\vk.jpg" alt="vikash" fluid />
              <Card.Body>
                <Card.Text>
                  <h2>Vikash Kumar</h2>
                  <p>Front end stuffs</p>
                  <p>A Gamer, A coder and sometimes a photographer</p>
                  <p>iamvikashkumar30@gmail.com</p>
                  <p>
                    <Button
                      href="https://www.instagram.com/vikashkr30"
                      variant="success"
                    >
                      {" "}
                      Contact
                    </Button>{" "}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img src="uploads\members\MOhit.jpeg" alt="Mohit" fluid />
              <Card.Body>
                <Card.Text>
                  <h2>Mohit Wankhade</h2>
                  <p>Content writer</p>
                  <p>Gaming is life</p>
                  <p>wmohit301@gmail.com</p>
                  <p>
                    <Button variant="success"href="https://www.instagram.com/mystic_luminary/">
                      Contact
                    </Button>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                style={{ height: 300, width: 250 }}
                src="uploads\members\sumit.jpeg"
                alt="Sumit"
                fluid
              />

              <Card.Body>
                <Card.Text>
                  <h2>Sumit Singh Ghuraiya</h2>
                  <p>Front-end</p>
                  <p>Traveller, wanderer</p>
                  <p>sumitghuraiya@gmail.com</p>
                  <p>
                    <Button variant="success"href="https://www.instagram.com/sumitghuraiya/">
                      Contact
                    </Button>
                  </p>
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
