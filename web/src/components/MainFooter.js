import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #f2f2f2;
  text-align: center;
  font-size: 12px;
  color: #2c2142;
  line-height: 0px;
  padding: 16px;
`;

function MainFooter({ address, city, email, postalCode, province, name }) {
  return (
    <Footer>
      <Container>
        <div>
          © {new Date().getFullYear()} {name}
        </div>
        {/* <p>
          {address} {city}, {province} {postalCode}
        </p> */}
        {/* <a href={`mailto: ${email}`}>{email}</a> */}
      </Container>
    </Footer>
  );
}
export default MainFooter;
