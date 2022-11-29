import React from 'react';
import { Button, ButtonGroup, Col, Form, InputGroup } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';


let formData = new FormData();    //formdata object

formData.append('name', 'ABC');   //append the values with key, value pair
formData.append('age', 20);

const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}

const url = 'http://localhost:3000/api/flightSearch';

axios.post(url, formData, config)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });




const startDate = new Date();

function handleDateSelect() {
  console.log('handleDateSelect');
  console.log(startDate.getDate, ' startDate');
}

export default function OneWayForm() {
  return (
    <>
      <Form>
        <Col>
          <InputGroup>
            <InputGroup.Text>From:</InputGroup.Text>
            <Form.Control as="input" aria-label="With textarea" />
          </InputGroup>
          <div className="my-2">
            Depart:{' '}
            <ReactDatePicker
              className="my-2"
              selected={startDate}
              onSelect={handleDateSelect}
            />
          </div>
        </Col>
        <Col>
          <InputGroup>
            <InputGroup.Text>To:</InputGroup.Text>
            <Form.Control as="input" aria-label="With textarea" />
          </InputGroup>
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
