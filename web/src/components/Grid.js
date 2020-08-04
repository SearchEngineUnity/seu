import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Tile1 from './Tile1';
import Tile2 from './Tile2';
import Tile3 from './Tile3';
import { mapTileToProps } from '../lib/mapToProps';
// import styled from 'styled-components';

function Grid({ leader, title, subtitle, col, design, cards, id }) {
  console.log(col, cards);
  const componentTypeSwitch = (tileDesign, tileCol, tile) => {
    switch (tileDesign) {
      case '1':
        return <Tile1 col={tileCol} {...mapTileToProps(tile)} />;

      case '2':
        return <Tile2 col={tileCol} {...mapTileToProps(tile)} />;

      case '3':
        return <Tile3 col={tileCol} {...mapTileToProps(tile)} />;

      default:
        return <div>Tile Design undefined</div>;
    }
  };

  return (
    <Container as="section">
      <p>{leader}</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <Row>{cards.map((card) => componentTypeSwitch(design, col, card))}</Row>
    </Container>
  );
}

export default Grid;
