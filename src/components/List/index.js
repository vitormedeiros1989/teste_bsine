import React from 'react';

//import Card from '../Card';

import { Container } from './styles';

import AppB from '../Card';

export default function List({ data }) {
  return (
    <Container>
      <header>
        <div className="borderTop"></div>
        <div className="box">
          <h2>{data.title}</h2>
          <AppB />
        </div>
      </header>
    </Container>
  );
}