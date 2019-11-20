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
  }
}
