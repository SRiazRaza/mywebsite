import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import avatar from '../assets/images/avatar.jpg'

export default class SEO extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    isPost: PropTypes.bool
  }

  static defaultProps = {
    title: 'Riaz Raza',
    image: `https://riazraza.me${avatar}`,
    url: 'https://riazraza.me/',
    description: 'Syed Riaz Raza - Cognitive Software Engineer',
    isPost: false
  }

  render() {
    const { image, url, description, isPost } = this.props
    const title = (this.props.title === '' ? '' : `${this.props.title} · `) + 'Riaz Raza'
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        sameAs: [
          'https://twitter.com/S_Riaz_Raza',
          'https://www.facebook.com/S.R.R.S.E.M.L.G',
          'https://github.com/SRiazRaza',
          'https://www.linkedin.com/in/riaz-raza-a2002a181'
        ],
        url: url,
        name: title,
        alternateName: description
      }
    ]

    if (isPost) {
      schemaOrgJSONLD.push([
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          sameAs: [
            'https://twitter.com/S_Riaz_Raza',
            'https://www.facebook.com/S.R.R.S.E.M.L.G',
            'https://github.com/SRiazRaza',
            'https://www.linkedin.com/in/riaz-raza-a2002a181'
          ],
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image: image
              }
            }
          ]
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          sameAs: [
            'https://twitter.com/S_Riaz_Raza',
            'https://www.facebook.com/S.R.R.S.E.M.L.G',
            'https://github.com/SRiazRaza',
            'https://www.linkedin.com/in/riaz-raza-a2002a181'
          ],
          url: url,
          name: title,
          alternateName: `${url} | Syed Riaz Raza`,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image
          },
          description
        }
      ])
    }

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        <meta property="fb:app_id" content="302184056577324" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={isPost ? 'article' : 'website'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@S_Riaz_Raza" />
        <meta name="twitter:creator" content="@S_Riaz_Raza" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}
