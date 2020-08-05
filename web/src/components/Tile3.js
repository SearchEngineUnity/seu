import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const PaddedDiv = styled.div`
  margin-bottom: 30px;

  @media screen and (max-width: 575px) {
    margin-bottom: 15px;
  }

  &:nth-last-child(1) {
    margin-bottom: 1rem;
  }

  &:nth-last-child(2) {
    @media screen and (min-width: 576px) {
      margin-bottom: 1rem;
    }
  }
  &:nth-last-child(3) {
    @media screen and (min-width: 992px) {
      margin-bottom: 1rem;
    }
  }
`;

function Tile3({ id, title, image, imageAlt, col, imageFilename }) {
  console.log(id, title, image, imageAlt, col);
  return (
    <PaddedDiv className={col}>
      <Card className="border-0">
        {image && <Card.Img alt={imageAlt} variant="top" src={image} dl={imageFilename} />}
        {/* <Card.Body>{title && <Card.Title>{title}</Card.Title>}</Card.Body> */}
      </Card>
    </PaddedDiv>
  );
}
export default Tile3;
