import React from 'react';
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import OneWayForm from '../flightSearchForm/OneWay';
import RoundTrip from '../flightSearchForm/RoundTrip';
import SearchAll from '../flightSearchForm/SearchAll';
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
          <OneWayForm />
          {/* <RoundTrip />
          <SearchAll /> */}
        </Row>
      </Container>
    </>
  );
}
