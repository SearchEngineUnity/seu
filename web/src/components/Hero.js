import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import BlockContent from './block-contents/SimpleSerializer';

function Hero({ heroText, title, imageURL, id, backgroundColor }) {
  console.log(heroText, title, imageURL, id, backgroundColor);
  const style = {
    backgroundColor,
    color: 'white',
    padding: '0px',
    marginBottom: '3rem',
  };

  const Background = styled.div`
    background-image: url(${imageURL});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 991px;
    padding-top: 120px;
    padding-bottom: 120px;
    margin: auto;

    @media (max-width: 991px) {
      background-image: none;
      padding-top: 2rem;
      padding-bottom: 1rem;
      width: auto;
    }
  `;

  return (
    <Jumbotron fluid key={id} style={style} as="section">
      <Background className="backgroundImage">
        <Container>
          <Row>
            <Col className="mx-auto" xl={9} lg={8}>
              <h1 style={{ whiteSpace: 'pre-wrap' }}>{title.replace(/\\n/g, '\n')}</h1>
              {heroText && <BlockContent blocks={heroText} />}
            </Col>
          </Row>
        </Container>
      </Background>
    </Jumbotron>
  );
}
export default Hero;
