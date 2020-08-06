import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';

const GreyContainer = styled(Container)`
  background-color: #f2f2f2;
  display: flex;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0px 4px 6px #00000029;
`;

const BrandImg = styled.img`
  width: auto;
  height: 1.6rem;
`;

const CustomNav = styled(Nav)`
  margin-left: auto;
  color: #2c2142;

  &:hover {
    @media screen and (max-width: 991px) {
      background-color: #d4d2d9;
    }
  }

  &:last-child {
    @media screen and (max-width: 991px) {
      margin-bottom: 1rem;
    }
  }
`;

const StyledButton = styled(Button)`
  padding: 0.5rem 1rem;
  background-color: #0a7b86;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #086068;
  }

  &:focus {
    background-color: #086068;
    box-shadow: none;
  }

  &.active,
  &:active {
    background-color: #086068 !important;
    box-shadow: none !important;
  }
`;

const CustomBurger = styled(Navbar.Toggle)`
  border: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const CustomNavbar = styled(Navbar)`
  padding: 0 15px;
`;

function NavTypeA({ name, logo, menu }) {
  return (
    <GreyContainer fluid className="px-0">
      <Container className="align-self-center px-0">
        <CustomNavbar collapseOnSelect expand="lg" className="text-center">
          <Navbar.Brand href="/" className="my-3">
            <BrandImg alt={name} src={logo} className="d-inline-block" />
          </Navbar.Brand>
          <CustomBurger aria-controls="basic-navbar-nav" style={{ color: '#2C2142' }}>
            <i className="fas fa-bars" />
          </CustomBurger>
          <Navbar.Collapse id="basic-navbar-nav">
            {menu.map((item) => (
              <>
                <hr />
                <CustomNav className="py-3">
                  <Nav.Link key={item._key} href={`#${item.link}`}>
                    {item.isButton ? <StyledButton>{item.title}</StyledButton> : item.title}
                  </Nav.Link>
                </CustomNav>
              </>
            ))}
          </Navbar.Collapse>
        </CustomNavbar>
      </Container>
    </GreyContainer>
  );
}

export default NavTypeA;
