import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap';
import SearchOrigin from '../flightSearch/SearchOrigin';
import Header from '../header/Header';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Row className="my-4">
          <h1>Search Flights</h1>
          <h2>Choose your flight option</h2>
          <ButtonGroup className="my-2" aria-label="Basic example">
            <Button variant="secondary">One-way</Button>
            <Button variant="secondary">Round-trip</Button>
            <Button variant="secondary">Search all flights</Button>
          </ButtonGroup>
        </Row>
        <Row>
          <Col>
            <InputGroup>
              <InputGroup.Text>From:</InputGroup.Text>
              <Form.Control as="input" aria-label="With textarea" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup>
              <InputGroup.Text>To:</InputGroup.Text>
              <Form.Control as="input" aria-label="With textarea" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>Home3</div>
          </Col>
          <Col>
            <div>Home4</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
