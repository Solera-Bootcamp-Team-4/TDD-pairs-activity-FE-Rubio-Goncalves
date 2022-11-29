import React from 'react';
import { Button, ButtonGroup, Col, Form, InputGroup } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';

export default function RoundTrip() {
  return (
    <>
      <Col>
        <InputGroup>
          <InputGroup.Text>From:</InputGroup.Text>
          <Form.Control as="input" aria-label="With textarea" />
        </InputGroup>
        <div className="my-2">
        Depart: <ReactDatePicker className="my-2" />
        </div>
      </Col>
      <Col>
        <InputGroup>
          <InputGroup.Text>To:</InputGroup.Text>
          <Form.Control as="input" aria-label="With textarea" />
        </InputGroup>
        Depart: <ReactDatePicker className="my-2" />
      </Col>
      <ButtonGroup className="my-2" aria-label="Basic example">
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Reset</Button>
      </ButtonGroup>
    </>
  );
}
