import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  previewImageURL,
  url,
}) {
  return (
    <StaticQuery
      query={graphql`
        query DefaultSEOQuery {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            link={[{ rel: 'icon', type: 'image/png', href: 'ikarus-favicon.png' }]}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title || data.site.siteMetadata.title,
              },
              {
                property: 'og:description',
                content: metaDescription || data.site.siteMetadata.description,
              },
              {
                property: 'og:image',
                name: 'image',
                content:
                  previewImageURL || 'https://ikarus.band/ikarus-social.png',
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:url',
                content: url || 'https://ikarus.band',
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
              {
                name: 'twitter:image',
                content:
                  previewImageURL || 'https://ikarus.band/ikarus-social.png',
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : [],
              )
              .concat(meta)}
          >
            <style type="text/css">
              {` 
                body {
                  -webkit-font-smoothing: antialiased;
                  background-color: #F6F9FC;
                }
              `}
            </style>
          </Helmet>
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [
    'Ikarus',
    'Mosaismic',
    'Chronosome',
    'Echo',
    'Contemporary Music',
    'Minimal Jazz',
    'Minimal Music',
    'Contemporary groove jazz',
    'Contemporary Jazz',
    'Rammón Oliveras',
    'Anna Hirsch',
    'Andreas Lareida',
    'Lucca Fries',
    'Mo Meyer',
    'Zurich',
  ],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;
