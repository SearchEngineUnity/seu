import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Subtitle = styled.p`
  font-size: 1.75rem;
`;

function TextBox({ leaderIcon, leaderAlt, leaderText, title, subtitle, text }) {
  return (
    <div>This is TextBox</div>
    // <Container id={`#${id}`}>
    //   {title && <h2 className="text-center">{title}</h2>}
    //   {subtitle && <Subtitle className="text-center">{subtitle}</Subtitle>}
    //   <Row className="mx-auto">
    //     {set.map((el) => {
    //       console.log(el)
    //       if (order) {
    //         return (
    //           <>
    //             <Col lg="6" xs="12">
    //               this is image
    //             </Col>
    //             <Col lg="6" xs="12">
    //               this is text
    //             </Col>
    //           </>
    //         );
    //       }
    //       return (
    //         <>
    //           <Col lg="6" xs="12">
    //             {/* <TextBox info={el.textBox} /> */}
    //           </Col>
    //           <Col lg="6" xs="12">
    //             this is image
    //           </Col>
    //         </>
    //       );
    //     })}
    //   </Row>
    // </Container>
  );
}

TextBox.propTypes = {
  leaderIcon: PropTypes.string,
  leaderAlt: PropTypes.string,
  leaderText: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  text: PropTypes.object,
};

TextBox.defaultProps = {
  leaderIcon: null,
  leaderAlt: null,
  leaderText: null,
  title: null,
  subtitle: null,
  text: null,
};

export default TextBox;
