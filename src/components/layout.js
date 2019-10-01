import React from "react"
import PropTypes from "prop-types"
import ScrollUpButton from "react-scroll-up-button";
import { createGlobalStyle } from 'styled-components'
import Header from "./header"
import Footer from "./Footer"
import Section from './Section'
import * as Colors from '../utils/colors'

// import * as fonts from "../fonts"
import { withBreakpoints } from 'react-breakpoints'

import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <ScrollUpButton ToggledStyle={{opacity: 0.8, zIndex: 999}}/>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Section
          color={Colors.Black}
          bgColor={Colors.White}
          tag="main"
          padding={false}
          style={{padding:0}}
        >
          {children}
        </Section>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withBreakpoints(Layout)

const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }
  body {
    min-width: 325px;
  }
`
