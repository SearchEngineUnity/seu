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
  };

  const Background = styled.section`
    background-image: url(${imageURL});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    width: 991px;
    padding-top: 120px;
    padding-bottom: 120px;
    margin: auto;

    @media(max-width: 991px) {
      background-image: none;
      padding: 12px;
  `;

  return (
    <Jumbotron fluid key={id} style={style}>
      <Background className="backgroundImage">
        <Container>
          <Row>
            <Col className="mx-auto" xl={9} lg={8}>
              <h1>
                <pre>{`${title.replace(/\\n/g, '\n')}`}</pre>
              </h1>
              {heroText && <BlockContent blocks={heroText} />}
            </Col>
          </Row>
        </Container>
      </Background>
    </Jumbotron>
  );
}
export default Hero;
