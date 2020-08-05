import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Tile1 from './Tile1';
import Tile2 from './Tile2';
import Tile3 from './Tile3';
import { mapTileToProps } from '../lib/mapToProps';

function Grid({ leader, title, subtitle, col, design, cards }) {
  console.log(col, cards);
  const componentTypeSwitch = (tileDesign, tileCol, tile, id) => {
    switch (tileDesign) {
      case '1':
        return <Tile1 key={id} col={tileCol} {...mapTileToProps(tile)} />;

      case '2':
        return <Tile2 key={id} col={tileCol} {...mapTileToProps(tile)} />;

      case '3':
        return <Tile3 key={id} col={tileCol} {...mapTileToProps(tile)} />;

      default:
        return <div>Tile Design undefined</div>;
    }
  };

  return (
    <Container as="section">
      <p className="text-center leader">{leader}</p>
      <h2 className="text-center">{title}</h2>
      <p className="text-center subtitle">{subtitle}</p>
      <Row>{cards.map((card) => componentTypeSwitch(design, col, card))}</Row>
    </Container>
  );
}

export default Grid;
