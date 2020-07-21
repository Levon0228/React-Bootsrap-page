/** @format */

import React, { Component } from "react";
import { Container, Media, Row, Col, ListGroup, Card } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="9">
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                />
                <Media.Body>
                  <h5>JS Blog</h5>
                  <p>
                    Lorem Note that the development build is not optimized Note
                    that the development build is not optimized Note that the
                    development build is not optimized Note that the development
                    build is not optimized
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                />
                <Media.Body>
                  <h5>JS Blog</h5>
                  <p>
                    Lorem Note that the development build is not optimized Note
                    that the development build is not optimized Note that the
                    development build is not optimized Note that the development
                    build is not optimized
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                />
                <Media.Body>
                  <h5>JS Blog</h5>
                  <p>
                    Lorem Note that the development build is not optimized Note
                    that the development build is not optimized Note that the
                    development build is not optimized Note that the development
                    build is not optimized
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                />
                <Media.Body>
                  <h5>JS Blog</h5>
                  <p>
                    Lorem Note that the development build is not optimized Note
                    that the development build is not optimized Note that the
                    development build is not optimized Note that the development
                    build is not optimized
                  </p>
                </Media.Body>
              </Media>
              <Media className="m-5">
                <img
                  width={150}
                  height={150}
                  className="mr-3"
                  alt="Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                />
                <Media.Body>
                  <h5>JS Blog</h5>
                  <p>
                    Lorem Note that the development build is not optimized Note
                    that the development build is not optimized Note that the
                    development build is not optimized Note that the development
                    build is not optimized
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col md="3">
              <h5 className="text-center mt-5">Categories</h5>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>HTML/CSS</ListGroup.Item>
                  <ListGroup.Item>JavaScript</ListGroup.Item>
                  <ListGroup.Item>C++</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card className="mt-3">
                <Card.Body>
                  <Card.Title>Side widget</Card.Title>
                  <Card.Text>
                    Note that the development build is not optimized Note that
                    the development build is not optimized Note that the
                    development build is
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
