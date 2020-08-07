import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import styled from 'styled-components';
// this media query will only work with 3 across and NO OTHER!

const PaddedDiv = styled.div`
  margin-bottom: 30px;

  @media screen and (max-width: 575px) {
    margin-bottom: 15px;
  }

  &:nth-last-child(1) {
<<<<<<< Updated upstream
    margin-bottom: 0;
=======
    margin-bottom: 2rem;
>>>>>>> Stashed changes
  }

  &:nth-last-child(2) {
    @media screen and (min-width: 576px) {
<<<<<<< Updated upstream
      margin-bottom: 0;
=======
      margin-bottom: 2rem;
>>>>>>> Stashed changes
    }
  }
  &:nth-last-child(3) {
    @media screen and (min-width: 992px) {
<<<<<<< Updated upstream
      margin-bottom: 0;
=======
      margin-bottom: 2rem;
>>>>>>> Stashed changes
    }
  }
`;

function Tile2({ id, title, image, imageAlt, col }) {
  return (
    <PaddedDiv className={col}>
      <CardDeck>
        <Card className="border-0">
          {image && (
            <Card.Img
              alt={imageAlt}
              className="rounded-circle w-50 mx-auto"
              variant="top"
              src={image}
            />
          )}
          <Card.Body>
            {title && <Card.Title className="font-weight-bold text-center">{title}</Card.Title>}
          </Card.Body>
        </Card>
      </CardDeck>
    </PaddedDiv>
  );
}
export default Tile2;
