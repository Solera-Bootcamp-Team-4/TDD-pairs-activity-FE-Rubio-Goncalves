import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, ButtonGroup, Col, Form, InputGroup } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';

// let formData = new FormData();    //formdata object

// formData.append('name', 'ABC');   //append the values with key, value pair
// formData.append('age', 20);

// const config = {
//     headers: { 'content-type': 'multipart/form-data' }
// }

// const url = 'http://localhost:3000/api/flightSearch';

// axios.post(url, formData, config)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// const startDate = new Date();

// function handleDateSelect() {
//   console.log('handleDateSelect');
//   console.log(startDate.getDate, ' startDate');
// }

export default function OneWayForm() {
  const navigate = useNavigate();

  const origin = useRef();
  const destination = useRef();
  const date = useRef();

  const onSubmitHandler = () => {
    localStorage.setItem('origin', origin.current.value);
    localStorage.setItem('destination', destination.current.value);
    localStorage.setItem('date', date.current.value);
    console.log(localStorage.getItem('origin'));
    console.log(localStorage.getItem('destination'));
    console.log(localStorage.getItem('date'));
    navigate('results');
  };

  return (
    <>
      <Form className="Oneway-form" onSubmit={onSubmitHandler}>
        <Col>
          <InputGroup>
            <InputGroup.Text>From:</InputGroup.Text>
            <Form.Control as="input" aria-label="With textarea" ref={origin} />
            <InputGroup.Text>To:</InputGroup.Text>
            <Form.Control
              as="input"
              aria-label="With textarea"
              ref={destination}
            />
          </InputGroup>
          <Form.Control className="my-2" type="date" ref={date} />
        </Col>
        <ButtonGroup className="my-2" aria-label="Basic example">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary">Reset</Button>
        </ButtonGroup>
      </Form>
    </>
  );
}
