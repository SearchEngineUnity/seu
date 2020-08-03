import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextBox from './TextBox';
import { mapTextBoxToProps } from '../lib/mapToProps';

const Subtitle = styled.p`
  font-size: 1.75rem;
`;

function LrTextImage({ id, title, subtitle, order, textDesign, set }) {
  console.log(order, textDesign, set);
  return (
    <Container id={`#${id}`}>
      {title && <h2 className="text-center">{title}</h2>}
      {subtitle && <Subtitle className="text-center">{subtitle}</Subtitle>}
      {set.map((el) => {
        console.log(el);
        if (order) {
          return (
            <Row className="mx-auto" key={el._key}>
              <Col lg="6" xs="12">
                this is image
              </Col>
              <Col lg="6" xs="12">
                this is text
              </Col>
            </Row>
          );
        }
        return (
          <Row className="mx-auto" key={el._key}>
            <Col lg="6" xs="12">
              <TextBox {...mapTextBoxToProps(el.textBox)} />
            </Col>
            <Col lg="6" xs="12">
              this is image
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

LrTextImage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  order: PropTypes.bool,
  textDesign: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  set: PropTypes.array.isRequired,
};

LrTextImage.defaultProps = {
  title: null,
  subtitle: null,
  order: false,
};

export default LrTextImage;
