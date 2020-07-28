import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../components/Seo';
// import Grid from '../components/Grid';
// import Hero from '../components/Hero';

import { mapSeoToProps } from '../lib/mapToProps';

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
        ... on SanityLeftRight {
          _key
          _type
          leader
          order
          subtitle
          title
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
        ... on SanityUnbounceCTA {
          _key
          _type
          link
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
                <div key={segment._key}>This is the Hero segment</div>
                // <Hero id={section._key} {...mapHeroToProps(section)} />
              );

            case 'grid':
              return (
                // <div>This is the Grid section</div>
                // <Article id={section._key} {...mapArticleToProps(section)} />
                <div key={segment._key}>This is the Grid section</div>
              );

            case 'leftRight':
              return (
                <div key={segment._key}>This is the LR segment</div>
                // <Hero id={section._key} {...mapHeroToProps(section)} />
              );

            case 'unbounceCTA':
              return (
                <div key={segment._key}>
                  <p>This is the unbounceCTA segment</p>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    data-netlify-recaptcha="true"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden" style={{ display: 'none' }}>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label>
                        Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                      </label>
                    </p>
                    <p>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label>
                        Name <input type="text" name="name" />
                      </label>
                    </p>
                    <p>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label>
                        Email <input type="email" name="email" />
                      </label>
                    </p>
                    {/* eslint-disable-next-line react/self-closing-comp */}
                    <div data-netlify-recaptcha="true"></div>
                    <p>
                      <button type="submit">Send</button>
                    </p>
                  </form>
                </div>
                // <Hero id={section._key} {...mapHeroToProps(section)} />
              );

            default:
              return <div> Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};
