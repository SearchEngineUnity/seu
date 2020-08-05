import React from 'react';
import { Card } from 'react-bootstrap';
// import styled from 'styled-components';

function Tile3({ id, title, image, imageAlt, col, imageFilename }) {
  console.log(id, title, image, imageAlt, col);
  return (
    <div className={col}>
      <Card key={id} className="border-0">
        {image && <Card.Img alt={imageAlt} variant="top" src={image} dl={imageFilename} />}
        {/* <Card.Body>{title && <Card.Title>{title}</Card.Title>}</Card.Body> */}
      </Card>
    </div>
  );
}
export default Tile3;
