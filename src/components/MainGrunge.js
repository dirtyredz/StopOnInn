import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const MainGrunge = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Main Grunge.png" }) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <MyImage fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default MainGrunge

const MyImage = styled(Img)`
  width: 100%;
`
