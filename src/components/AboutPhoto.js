import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'
import * as Colors from '../utils/colors'

const AboutPhoto = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "StopOnInn Sign.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Border><MyImage fluid={data.placeholderImage.childImageSharp.fluid} /></Border>}
  />
)
export default AboutPhoto

const MyImage = styled(Img)`
  height: auto;
  width: 100%;
  position: absolute;
  right: -15px;
  bottom: -10px;;
 & div {
  height: auto;
  width: 100%;
 }
`

const Border = styled.div`
  border: ${Colors.DarkGreen} 4px solid;
  position: relative;
  height: auto;
  width: 100%;
`
