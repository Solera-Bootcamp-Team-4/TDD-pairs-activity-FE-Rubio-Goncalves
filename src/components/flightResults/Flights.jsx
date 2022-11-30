import { func } from 'prop-types';
import React, { useEffect } from 'react';

export default function Flights() {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'http://localhost:8080/testing-web-app-test'
        );
        const data = await response.json();
        console.log(data, 'data');
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div>Flights</div>
    </>
  );
}
