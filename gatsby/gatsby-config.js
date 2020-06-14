const purgecssWhitelist = require("./purgecss-whitelist")

module.exports = {
  siteMetadata: {
    siteUrl: "https://heikehaensel.de",
    title: `Heike Hänsel`,
    description: `Heike Hänsel`,
    author: `oseven - Maximilian Haensel Einzelunternehmer`,
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-root-import",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        whitelist: purgecssWhitelist,
        ignore: ["slick.css", "slick-theme.css"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "logos",
        path: `${__dirname}/src/assets/logos`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "praxis",
        path: `${__dirname}/src/assets/praxis`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slider`,
        path: `${__dirname}/src/assets/slider`, // wherever background images are stored
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/icons/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Heike Hänsel Website",
        short_name: "Hänsel Heike",
        start_url: "/",
        background_color: "#333",
        theme_color: "#333",
        display: "minimal-ui",
        icon: "src/assets/favicon/favicon.ico",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://heikehaensel.de",
        sitemap: "https://heikehaensel.de/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0pth2gua4j2j`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "Ddrva5NsIHhjBdQz1Fo-OK8OonI8MJ6ZFS71urR2y0A",
      },
    },
  ],
}
