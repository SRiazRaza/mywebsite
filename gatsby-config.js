/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/`,
  siteMetadata: {
    title: 'Syed Riaz Raza',
    subtitle: 'Cognitive Software Engineer',
    description: `Hi, I'm Riaz Raza, Software Engineer. I am an analytical thinker who have a passion to get things done. A team player & an eager problem solver. A flexible & cognition type of person who is curious enough to learn things & improve them..`,
    siteUrl: 'https://riazraza.com',
    disqusShortname: 'riazraza',
    social: [
      { title: 'Github', link: 'https://github.com/SRiazRaza', icon: 'github' },
      { title: 'Twitter', link: 'https://twitter.com/S_Riaz_Raza', icon: 'twitter' },
      { title: 'Linkedin', link: 'https://www.linkedin.com/in/riaz-raza-a2002a181', icon: 'linkedin' },
      
    ],
    menu: [
      { title: 'Home', id: '', to: '/', icon: 'home' },
      { title: 'Blog', id: 'Blog', to: '/blog', icon: 'home' },
      { title: 'About', id: 'About', to: '/about', icon: 'home' },
      { title: 'Portfolio', id: 'Portfolio', to: '/portfolio', icon: 'home' },
      { title: 'Contact', id: 'Contact', to: '/contact', icon: 'home' }
    ]
  },plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      // All images from assets folder. For use in website.
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      // All images for Markdown pages. For use in generated posts, projects.
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/img/`
      }
    },
    {
      // Markdown pages: posts and projects folder
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `75`
            }
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'emoji-icon',
              size: 64,
              styles: {
                display: 'inline',
                margin: '0',
                position: 'relative'
              }
            }
          },
          'gatsby-remark-external-links',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        generateMatchPathRewrites: true
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#1976d2',
        showSpinner: false
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Riaz RAza',
        short_name: 'RIaz',
        start_url: '/',
        background_color: '#1976d2',
        theme_color: '#1976d2',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
