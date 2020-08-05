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
import { mapMainFooterToProps } from '../lib/mapToProps';
import GlobalStyle from '../global/GlobalStyle';

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
    }
  `);

  // const data = useStaticQuery(graphql`
  // query MyQuery($menu: String) {
  //   asset: allSanityHeaderAsset {
  //     nodes {
  //       title
  //       imageAsset {
  //         asset {
  //           url
  //           id
  //           fluid {
  //             ...GatsbySanityImageFluid
  //           }
  //         }
  //       }
  //     }
  //   }
  //   menu: sanitymainNavbar(title: {eq: $menu}) {
  //     title
  //     menu {
  //       ... on SanityNavGroup {
  //         _key
  //         _type
  //         nav {
  //           ... on SanityPage {
  //             title
  //             slug {
  //               current
  //             }
  //           }
  //           ... on SanityPost {
  //             title
  //             slug {
  //               current
  //             }
  //           }
  //         }
  //         group {
  //           nav {
  //             ... on SanityPage {
  //               title
  //               slug {
  //                 current
  //               }
  //               _type
  //             }
  //             ... on SanityPost {
  //               _type
  //               slug {
  //                 current
  //               }
  //               title
  //             }
  //           }
  //           _key
  //         }
  //       }
  //       ... on SanityNavItem {
  //         _key
  //         _type
  //         nav {
  //           ... on SanityPage {
  //             title
  //             slug {
  //               current
  //             }
  //           }
  //           ... on SanityPost {
  //             title
  //             slug {
  //               current
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // `)

  return (
    <>
      <Helmet>
        <script src="https://kit.fontawesome.com/e4a269ffa7.js" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/mwy2rpa.css" />
      </Helmet>
      {/* <MainNav menu={data.menu.menu}/> */}

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
