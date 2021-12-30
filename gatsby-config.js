module.exports = {
  siteMetadata: {
    title:
    'IKARUS, contemporary groove jazz. Album MOSAISMIC out now.',
    description:
      'Official page of the Zurich based contemporary groove jazz band IKARUS. Compositions by Ramón Oliveras. Currently on tour with their second Album Mosaismic.',
    author: 'Ramón Oliveras',
    url: 'https://ikarus.band',
  },
  plugins: [
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-43480308-4',
        anonymize: true,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://ikarus-band.us3.list-manage.com/subscribe/post?u=2ee7ebb4afc1f2a007de0b488&amp;id=b9daf8a087', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
};
