var Colors = require('./src/utils/colors')

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.stoponin.com`,
    title: `Stop On Inn`,
    description: `We are a family-oriented motel & campground located near fishing, hiking, skiing, golfing, ATV and snowmobile trails. Whether you are a family or only one person, we are here to make your stay at Stop On Inn an enjoyable occasion.`,
    author: `Digital Redz | David McClain (Dirtyredz)`,
    phone: '1(715) 637-3154',
    phoneHref: 'tel:1-715-637-3154',
    address: '1521 E DIVISION STREET, BARRON, WI 54812',
    addressHref: 'https://goo.gl/maps/3JYtL7wxrjJYkrsf8',
    email: 'stoponinnmotelandcampground@gmail.com',
    emailHref: 'mailto:stoponinnmotelandcampground@gmail.com',
    facebook: 'Like us on FB',
    facebookHref: 'https://www.facebook.com/StopOnInn/',
    hours: '8:00 am to 10:00 pm',
    links: [
      { name: 'HOME', to: '' },
      { name: 'THINGS TO DO', to: '#ThingsToDo' },
      { name: 'CONTACT', to: '#Contact' },
      { name: 'SEND US A MESSAGE', to: '#Message' },
    ],
    services: [
      // *Clean, Comfortable Rooms~Every room has Queen beds, you choose 1 or 2, the price is the same either way!
      // *Well Appointed Rooms~Each room has internet, expanded cable, individual climate control and windows that open for fresh air...everything you need for a comfortable stay!
      // *Working In Town?~Every room has a fridge and microwave. We also offer contractor rates (nightly and weekly) Plus there is room to park your big rig or work truck!
      // *RV Camping~we have 8 full-service campsites that include water, sewer, 30 amp electric, internet, and cable
      // *Tent Camping~we have several sites that include 110 electric service for small campers and tents.
      // *Campground amenities~ Our campground has a bathhouse and dump station. There are also several picnic areas, fire pits, and a play area for kids that can be used by all of our guests-motel and campground alike!
      // *Ample Parking~our motel-style setup means that you park outside your door, with the ability to keep a close eye on your vehicles, great for motorcycles and all your belongings. There is plenty of parking space for ATV trailers and boats as well!
      {
        Title: 'Clean, Comfortable Rooms',
        Text: 'Every room has Queen beds, you choose 1 or 2, the price is the same either way!',
        Icon: 'Bed',
        Width: 35
      },
      {
        Title: 'Well Appointed Rooms',
        Text: 'Each room has internet, expanded cable, individual climate control and windows that open for fresh air...everything you need for a comfortable stay!',
        Icon: 'Star',
        Width: 35
      },
      {
        Title: 'Working In Town?',
        Text: 'Every room has a fridge and microwave. We also offer contractor rates (nightly and weekly) Plus there is room to park your big rig or work truck!',
        Icon: 'SuitCase',
        Width: 35
      },
      {
        Title: 'RV Camping',
        Text: 'We have 8 full-service campsites that include water, sewer, 30 amp electric, internet, and cable',
        Icon: 'RV',
        Width: 45
      },
      {
        Title: 'Tent Camping',
        Text: 'We have several sites that include 110 electric service for small campers and tents.',
        Icon: 'Tent',
        Width: 35
      },
      {
        Title: 'Campground amenities',
        Text: 'Our campground has a bathhouse and dump station. There are also several picnic areas, fire pits, and a play area for kids that can be used by all of our guests-motel and campground alike!',
        Icon: 'Camping',
        Width: 60
      },
      {
        Title: 'Ample Parking',
        Text: 'Our motel-style setup means that you park outside your door, with the ability to keep a close eye on your vehicles, great for motorcycles and all your belongings. There is plenty of parking space for ATV trailers and boats as well!',
        Icon: 'Parking',
        Width: 35
      },
    ],
    greenLinks: [
      { title: 'BARRON COUNTY & CHETEK', position: -20, links: [
        { name: 'Barron County', url: 'https://www.visitbarroncounty.com/' },
        { name: 'Visit Barron County', url: 'https://www.facebook.com/visitbarroncounty' },
        { name: 'Pioneer Village Museum', url: 'https://www.pioneervillagemuseum.org/' },
        { name: 'Discover Wisconsin', url: 'http://discoverwisconsin.com/search/barron+' },
        { name: 'Explore Wisconsin', url: 'http://www.explorewisconsin.com/spotlight/barroncounty' },
        { name: 'Rice Lake', url: 'http://ricelakewis.com/' },
        { name: 'Indian Head County', url: 'http://www.wisconsinindianhead.org/area1.htm' },
        { name: 'City of Barron', url: 'http://cityofbarron.com/' },
        { name: 'City of Chetek', url: 'https://cityofchetek-wi.gov/' },
      ]},
      { title: 'ACTIVITIES', position: -40, links: [
        { name: '10 Things To Do', url: 'http://bobber.discoverwisconsin.com/10-things-barron-county/' },
        { name: 'Chetek Activities', url: 'https://chetek.com/activities.html' },
      ]},
      { title: 'VENUES', position: -10, links: [
        { name: 'The Enchanted barn', url: 'http://theenchantedbarn.com/' },
      ]},
      { title: 'ENTERTAINMENT', position: 30, links: [
        { name: 'Red Barn Theatre', url: 'https://www.redbarntheatre-ricelake.com/' },
      ]},
      { title: 'ATV & SNOWMOBILE TRAILS', position: 10, links: [
        { name: 'Barron Sheriff', url: 'http://barronsheriff.org/atv-information/' },
        { name: 'Dusty Trail Finders ATV Club', url: 'https://www.facebook.com/Dusty-Trail-Finders-ATV-Club-130618027023966/' },
        { name: 'Wisconsin ATV & UTV Trails', url: 'https://www.travelwisconsin.com/things-to-do/outdoor-fun/atv-and-utv' },
        { name: 'Wisconsin ATV Trails and Maps', url: 'https://www.traillink.com/stateactivity/wi-atv-trails/' },
        { name: 'Barron County Snowmobile Trail Report', url: 'http://snowtracks.com/reports/trail-report-rice-lake-barron-county-wisconsin-february-7-2019/' },
        { name: 'Travel Wisconsin Snowmobile Snow Report', url: 'https://www.travelwisconsin.com/snowreport/snowmobile' },
        { name: 'Rice Lake Snowmobile', url: 'http://ricelakewis.com/recreation/snowmobiling/' },
      ]},
      { title: 'GOLF', position: -40, links: [
        { name: 'Rolling Oaks Golf', url: 'https://www.rollingoaksgolf.net/' },
        { name: 'Pine Crest Golf', url: 'http://www.pinecrestdallas.com/' },
        { name: 'Turtleback Golf', url: 'https://www.turtlebackgolf.com/' },
      ]},
      { title: 'WINERIES & Breweries', position: 30, links: [
        { name: 'Valkyrie Brewery', url: 'http://www.valkyriebrewery.com/' },
        { name: 'LEINENKUGEL', url: 'https://leinie.com/av?url=https://leinie.com/leinie-lodge' },
        { name: 'Clove Meadow Winery', url: 'https://clovermeadow.com/' },
        { name: 'White Wolf Distillery', url: 'http://www.perlickdistillery.com/' },
      ]},
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stop On Inn`,
        short_name: `SOI`,
        start_url: `/`,
        background_color: Colors.White,
        theme_color: Colors.DarkGreen,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.stoponinn.com',
        sitemap: 'https://www.stoponinn.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Poppins:300,400,600,700,900',
            'Teko:300,400,600,700,900'
          ]
        }
      }
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://fe740e15653e430a968d3269144c07b6@sentry.io/1484247",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
  ],
}
