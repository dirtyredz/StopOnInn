import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "motel1-01.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <MyImage fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image

const MyImage = styled(Img)`
  width: 200px;
  min-width: 100px;

`
