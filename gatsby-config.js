/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: '/',
  siteMetadata: {
    title: 'Riaz Raza',
    subtitle: 'Cognitive Software Engineer',
    description: `Hi, I'm Riaz Raza, Software Engineer. I am an analytical thinker who have a passion to get things done. A team player & an eager problem solver. A flexible & cognition type of person who is curious enough to learn things & improve them..`,
    siteUrl: 'https://riazraza.me',
    disqusShortname: 'riazraza',
    twitterUsername: "@S_Riaz_Raza",
    social: [
      { title: 'Github', link: 'https://github.com/SRiazRaza', icon: 'github' },
      { title: 'Twitter', link: 'https://twitter.com/S_Riaz_Raza', icon: 'twitter' },
      { title: 'Linkedin', link: 'https://www.linkedin.com/in/syed-riaz-raza-a2002a181', icon: 'linkedin' },
      { title: 'Medium', link: 'https://medium.com/@riazraza0', icon: 'medium' }
      
    ],
    menu: [
      { title: 'Home', id: '', to: '/', icon: 'home' },
      { title: 'Blog', id: 'Blog', to: '/blog', icon: 'home' },
      { title: 'About', id: 'About', to: '/about', icon: 'home' },
      { title: 'Portfolio', id: 'Portfolio', to: '/portfolio', icon: 'home' },
      { title: 'Contact', id: 'Contact', to: '/contact', icon: 'home' }
    ]
  },plugins: [
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`pacifico:400`, `raleway:100,400,600,700`, "lato: 300,400,500"]
      }
    },
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-175307357-1",
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'riazraza.me',
        cookieName: 'SRiazRaza',
        cookieExpires: 86400
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
        name: 'Riaz Raza',
        short_name: 'Riaz',
        start_url: '/',
        background_color: '#1976d2',
        theme_color: '#1976d2',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png'
      }
    },
    'gatsby-plugin-styled-components'
  ]
}
