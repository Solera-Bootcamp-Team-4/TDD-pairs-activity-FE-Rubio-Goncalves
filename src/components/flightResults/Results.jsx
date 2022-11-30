import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../header/Header';
import Flights from './Flights';

export default function Results() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className="my-2">
            Search results from {localStorage.getItem('origin')} to{' '}
            {localStorage.getItem('destination')} on{' '}
            {localStorage.getItem('date')}
          </div>
          <Flights />
        </Row>
      </Container>
    </>
  );
}
