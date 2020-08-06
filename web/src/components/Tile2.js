import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
// import styled from 'styled-components';

function Tile2({ id, title, image, imageAlt, col, imageFilename }) {
  return (
    <div className={col}>
      <CardDeck className="">
        <Card key={id} className="border-0">
          {image && (
            <Card.Img
              alt={imageAlt}
              className="rounded-circle w-50 mx-auto"
              variant="top"
              src={image}
              dl={imageFilename}
            />
          )}
          <Card.Body>
            {title && <Card.Title className="font-weight-bold text-center">{title}</Card.Title>}
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
export default Tile2;
