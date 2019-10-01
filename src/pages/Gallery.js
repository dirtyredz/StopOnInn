import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridGallery from "../components/Gallery/Gallery"
import Section from "../components/Section"
import * as Colors from '../utils/colors'

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      smallOne: file(relativePath: { eq: "Small One.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smallTwo: file(relativePath: { eq: "Small Two.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smallThree: file(relativePath: { eq: "Small Three.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smallFour: file(relativePath: { eq: "Small Four.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tallOne: file(relativePath: { eq: "Tall One.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wideOne: file(relativePath: { eq: "Wide One.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroomOne: file(relativePath: { eq: "Bedroom 1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroomTwo: file(relativePath: { eq: "Bedroom 2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroomThree: file(relativePath: { eq: "Bedroom 3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroomFour: file(relativePath: { eq: "Bedroom 4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroomFive: file(relativePath: { eq: "Bedroom 5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroomSix: file(relativePath: { eq: "Bedroom 6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroomSeven: file(relativePath: { eq: "Bedroom 7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bedroomEight: file(relativePath: { eq: "Bedroom 8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <SEO title="Gallery" />
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
        style={{ textAlign: 'center', marginBottom: 100 }}
      >
        <h1>OUR GALLERY</h1>
        <GridGallery
          maxColumns={4}
          minColumns={2}
          minRowHeight={150}
          maxRowHeight={200}
          images={[
            {
              cSpan: 1,
              rSpan: 1,
              fluid: data.smallOne.childImageSharp.fluid,
            },
            {
              cSpan: 1,
              rSpan: 1,
              fluid: data.smallTwo.childImageSharp.fluid,
            },
            {
              cSpan: 1,
              rSpan: 2,
              fluid: data.tallOne.childImageSharp.fluid,
            },
            {
              cSpan: 1,
              rSpan: 1,
              fluid: data.smallThree.childImageSharp.fluid,
            },
            {
              cSpan: 2,
              rSpan: 1,
              fluid: data.wideOne.childImageSharp.fluid,
            },
            {
              cSpan: 1,
              rSpan: 1,
              fluid: data.smallFour.childImageSharp.fluid,
            },
            {
              cSpan: 1,
              rSpan: 2,
              fluid: data.bedroomOne.childImageSharp.fluid,
            },
            {
              cSpan: 1,
              rSpan: 2,
              fluid: data.bedroomTwo.childImageSharp.fluid,
            },
            {
              cSpan: 2,
              rSpan: 1,
              fluid: data.bedroomThree.childImageSharp.fluid,
            },
            {
              cSpan: 2,
              rSpan: 1,
              fluid: data.bedroomFour.childImageSharp.fluid,
            },
            {
              cSpan: 2,
              rSpan: 1,
              fluid: data.bedroomFive.childImageSharp.fluid,
            },
            {
              cSpan: 1,
              rSpan: 2,
              fluid: data.bedroomSix.childImageSharp.fluid,
            },
            {
              cSpan: 1,
              rSpan: 2,
              fluid: data.bedroomSeven.childImageSharp.fluid,
            },
            {
              cSpan: 2,
              rSpan: 1,
              fluid: data.bedroomEight.childImageSharp.fluid,
            },
          ]}
        />
      </Section>
    </Layout>
  )
}

export default Gallery
