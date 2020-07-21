/** @format */

import React, { Component } from "react";
import CarouselBox from "../components/CarouselBox";
import { Container, Card, CardDeck, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our Team</h2>
          <CardDeck className="m-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem imsum dolor molor Lorem imsum dolor molor
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1036641/pexels-photo-1036641.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem imsum dolor molor Lorem imsum dolor molor
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem imsum dolor molor Lorem imsum dolor molor
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
