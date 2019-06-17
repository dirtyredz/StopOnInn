import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const TallOne = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Tall One.png" }) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <MyImage fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default TallOne

const MyImage = styled(Img)`
  height: 100%;
  width: 100%;

  & img {
    margin: 0;
  }
`
