import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "motel3-01.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
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
  width: 100%;
  max-width: 500px;
  min-width: 100px;
`
