import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../components/Seo';
// import Grid from '../components/Grid';
import Hero from '../components/Hero';
import CtaForm from '../components/CtaForm';

import { mapSeoToProps, mapCtaFormToProps } from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      segments {
        ... on SanityGrid {
          _key
          _type
          idTag
          title
          subtitle
          leader
          col
          design
          cards {
            _key
            title
            cardImage {
              alt
              image {
                asset {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
        ... on SanityHero {
          _key
          _type
          idTag
          title
          _rawText(resolveReferences: { maxDepth: 20 })
          backgroundImage {
            asset {
              fluid {
                src
              }
            }
            _type
          }
          backgroundColor {
            _type
            hex
          }
        }
        ... on SanityLrTextImage {
          _key
          _type
          idTag
          leader
          order
          subtitle
          title
          textDesign
          set {
            imageBox {
              _key
              alt
              image {
                asset {
                  fluid {
                    src
                  }
                }
              }
            }
            _key
            textBox {
              text {
                _key
                _type
                style
                list
                _rawChildren
              }
              _key
              _rawText(resolveReferences: { maxDepth: 20 })
              leaderIcon
              leaderText
              subtitle
              title
            }
          }
        }
        ... on SanityCtaForm {
          _key
          _type
          idTag
          title
          subtitle
          form {
            submit
            name
            formFields {
              ... on SanityInput {
                _key
                _type
                inputType
                label
                name
                placeholder
                required
              }
              ... on SanityTextarea {
                _key
                _type
                label
                name
                required
                rows
                placeholder
              }
            }
          }
        }
      }
      slug {
        current
      }
      title
      description
      twitter {
        description
        title
      }
      nofollow
      noindex
      facebook {
        description
        image {
          asset {
            url
          }
        }
        title
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default ({ data }) => {
  const type = 'page';

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main>
        {data.page.segments.map((segment) => {
          const { _type } = segment;
          switch (_type) {
            case 'hero':
              return (
                // <div key={segment._key}>This is the Hero segment</div>
                // <Hero id={section._key} {...mapHeroToProps(section)} />
                <Hero />
              );

            case 'grid':
              return (
                // <div>This is the Grid section</div>
                // <Article id={section._key} {...mapArticleToProps(section)} />
                <div key={segment._key}>This is the Grid section</div>
              );

            case 'lrTextImage':
              return (
                <div key={segment._key}>This is the LR segment</div>
                // <Hero id={section._key} {...mapHeroToProps(section)} />
              );

            case 'ctaForm':
              return <CtaForm key={segment._key} {...mapCtaFormToProps(segment)} />;

            default:
              return <div key="default"> Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};
