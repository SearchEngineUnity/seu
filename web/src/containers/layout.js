/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import MainFooter from '../components/MainFooter';
import MainNav from '../components/MainNav';
import { mapMainNavToProps, mapMainFooterToProps } from '../lib/mapToProps';
import GlobalStyle from '../global/GlobalStyle';
import favicon from '../images/SEU-favicon-transparent.png';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      sanityCompanyInfo {
        _key
        address1
        city
        email
        postalCode
        province
        name
      }
      sanityMainNavbar {
        title
        logo {
          asset {
            url
          }
        }
        menu {
          ... on SanityNavJumpLink {
            _key
            _type
            isButton
            link
            title
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <script src="https://kit.fontawesome.com/e4a269ffa7.js" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/mwy2rpa.css" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <MainNav {...mapMainNavToProps(data.sanityMainNavbar)} />
      <GlobalStyle />
      <>{children}</>
      <MainFooter {...mapMainFooterToProps(data.sanityCompanyInfo)} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
