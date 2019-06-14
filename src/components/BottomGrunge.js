import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const BottomGrunge = (props) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "Bottom Grunge.png" }) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <MyImage {...props} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default BottomGrunge

const MyImage = styled(Img)`
  width: 100%;
  margin-top: ${props => props.margin !== undefined ? props.margin : '25px'};
`
