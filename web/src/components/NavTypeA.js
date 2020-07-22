import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';

function NavTypeA({ menu }) {
  const componentTypeSwitch = (menuItem) => {
    switch (menuItem._type) {
      case 'navItem':
        return (
          <Link key={menuItem._key} to={menuItem.nav.slug.current}>
            {menuItem.nav.title.toUpperCase()}
          </Link>
        );
      case 'navGroup':
        return (
          <div className="dd" key={menuItem._key}>
            <Link to={menuItem.nav.slug.current}>{menuItem.nav.title.toUpperCase()}</Link>
            <div className="dropdown-content">
              {menuItem.group.map((item) => {
                return (
                  <Link key={item._key} to={item.nav.slug.current}>
                    {item.nav.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      default:
        return <p>Menu Type Not Found</p>;
    }
  };

  return (
    <Container>
      {menu.map((item) => {
        return componentTypeSwitch(item);
      })}
    </Container>
  );
}

export default NavTypeA;
