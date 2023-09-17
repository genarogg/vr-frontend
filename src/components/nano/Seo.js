import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet, HelmetProvider } from "react-helmet-async"

import PropTypes from "prop-types"

function Seo({ description, title, img, url = "", children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const URLdomain = site.siteMetadata?.siteUrl
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const image = URLdomain + img

  return (
    <HelmetProvider>
      <Helmet>
        <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
        <meta
          name="twitter:title"
          content={defaultTitle ? `${title} | ${defaultTitle}` : title}
        />
        <meta
          property="og:title"
          content={defaultTitle ? `${title} | ${defaultTitle}` : title}
        />

        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />

        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />

        <meta property="og:url" content={URLdomain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@vueltarapida" />
        <meta
          name="twitter:creator"
          content={site.siteMetadata?.author || ``}
        />

        <meta name="twitter:card" content="summary" />
        {children}
      </Helmet>
    </HelmetProvider>
  )
}

Seo.defaultProps = {
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Seo
