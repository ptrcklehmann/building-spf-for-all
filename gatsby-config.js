
module.exports = {
  siteMetadata: {
    title: `Building social protection floors for all`,
    description: `ILO Global Flagship Programme website on Building social protection floors for all`,
    author: `ILO, ptrcklehmann`,
    siteUrl: `https://buildingspfforall.gatsbyjs.io`,
    headerImg: `/images/slide.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-social-cards",
      options: {
        // image to use when no cover in frontmatter
        backgroundImage: "./static/images/building-intro.jpg",
        // author to use when no auth in frontmatter
        defaultAuthor: "International Labour Organization",
        // card design
        design: "card", // 'default' or 'card'
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`noto sans:400,400i,700`, `overpass:300,400,600,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images`
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/ilo-favicon-01.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        // purgeCSSOptions: {
        //   content: ['index.html', '**/*.js', '**/*.html']
        //   // safelist: ['safelist'], // Don't remove this selector
        // },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
