import React from 'react';
import { Card } from 'react-bootstrap';

function Tile1({ id, title, image, imageAlt, col }) {
  console.log(id, title, image, imageAlt, col);
  return (
    <div className={`align-items-stretch mb-4 ${col}`}>
      <Card key={id} className="bordercard h-100">
        {image && <Card.Img alt={imageAlt} className="w-100 h-auto" variant="top" src={image} />}
        <Card.Body>
          {title && <Card.Title className="font-weight-bold text-center">{title}</Card.Title>}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Tile1;
