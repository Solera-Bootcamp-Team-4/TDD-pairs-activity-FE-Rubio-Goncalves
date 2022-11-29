import React from 'react';
import { Button, Col } from 'react-bootstrap';
import ReactDatePicker from 'react-datepicker';

export default function SearchAll() {
  return (
    <>
      <Col>
        <div className="my-2">
          Arrival: <ReactDatePicker className="my-2" />
        </div>
        <Button variant="primary">Submit</Button>
      </Col>
    </>
  );
}
