import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainGrunge from "../components/MainGrunge"
import TopGrunge from "../components/TopGrunge"
import BottomGrunge from "../components/BottomGrunge"
import Section from '../components/Section'
import Testimonials from '../components/Testimonials'
import Box from '../components/Box'
import AboutPhoto from '../components/AboutPhoto'
import GreenLinks from '../components/GreenLinks'
import * as Icons from '../components/Icons'
import StopOnInnText from '../components/StopOnInnText'
import ContactInfoLine from '../components/ContactInfoLine'
import * as Colors from '../utils/colors'
import { withBreakpoints } from 'react-breakpoints'
import BreakPoints from '../utils/breakpoints'
import { useStaticQuery, graphql } from "gatsby"
import Services from '../components/Services'
import GridGallery from "../components/GridGallery"
import Gallery from "../components/Gallery/Gallery"

const IndexPage = (props) => {
  const { site, Vintage, VintageTwo, ...data } = useStaticQuery(
    graphql`
      query {
        Vintage: file(relativePath: { eq: "Vintage Header.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        VintageTwo: file(relativePath: { eq: "Stop On Inn Vintage.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
        site {
          siteMetadata {
            address
            addressHref
            phone
            phoneHref
            email
            emailHref
            facebook
            facebookHref
            hours
            links {
              name
              to
            }
            greenLinks {
              title
              position
              links {
                name
                url
              }
            }
          }
        }
      }
    `
  )

  const half = Math.floor(site.siteMetadata.greenLinks.length / 2) + 1
  const firstHalfGreenLinks = site.siteMetadata.greenLinks.slice(0, half);
  const secondHalfGreenLinks = site.siteMetadata.greenLinks.slice(half, site.siteMetadata.greenLinks.length);
  const { breakpoints, currentBreakpoint } = props
  const MobileView = breakpoints[currentBreakpoint] <= breakpoints.mobileLandscape


  const NumberYears = Math.abs(new Date().getFullYear() - 1969);

  return (
    <Layout>
      <SEO title="Home" />
      <Section
        color={Colors.White}
        bgColor={Colors.Grey}
        image={Vintage.childImageSharp.fluid}
        padding={false}
      >
        <Shadow>
          <h1>Welcome to <StopOnInnText /></h1>
          <br />
          <p>We are a family-oriented motel & campground located near fishing, hiking, skiing, golfing, ATV and snowmobile trails. Whether you are in town for work or play, a family or only one person, we are here to make your stay at <StopOnInnText /> a comfortable and enjoyable occasion.</p>
        </Shadow>
        <MainGrunge />
      </Section>
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
      >
        <TheBoxes>
          <Box
            Icon={Icons.Map}
            title="MAP & DIRECTIONS"
          >
            <StopOnInnText /> is <TextLink to="#Contact">located</TextLink> an hour from EAU airport and in the middle of tons of great activity opportunities. We are right off of Hwy 8 so it is quite easy to find us wherever you come from.
          </Box>
          <Box
            Icon={Icons.Home}
            title="ACCOMMODATION SERVICES"
          >
            <StopOnInnText /> provides high-quality <TextLink to="#accommodation">accommodation</TextLink> services to customers that come to our city from all over the world throughout the year.
          </Box>
          <Box
            Icon={Icons.Star}
            title="GREAT EXPERIENCE"
          >
            We are sure you will have a great experience of staying at <StopOnInnText />, See what our other customers have said about us in our <TextLink to="#Testimonials">testimonials</TextLink>.
          </Box>
        </TheBoxes>
      </Section>
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
      >
        <Split>
          <div>
            <AboutPhoto />
          </div>
          <div>
            <h3>ABOUT US</h3>
            <p>
              <StopOnInnText /> Motel & Campground, in Barron, WI, is the area's leading motel and campground serving Barron, Rice Lake, Cameron, Chetek and surrounding areas. It has been family owned and operated for <time>{NumberYears}</time> years.
            </p>
            <ContactInfoLine tag="a" href={site.siteMetadata.facebookHref} icon={Icons.Facebook} text={site.siteMetadata.facebook}/>
          </div>
        </Split>
      </Section>
      <Services />
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
        anchor="ThingsToDo"
        style={{ textAlign: 'center', marginBottom: 75, zIndex: 2 }}
      >
        <h1 style={{ marginBottom: 0, lineHeight: 1, marginTop: 25 }}>ACTIVITIES</h1>
        <h5 style={{ marginBottom: 25 }}>(Hover or tap each box to show links)</h5>
        <WisconsinWrapper MobileView={MobileView}>
          {MobileView
            ? (
              <>
                <LinkWrapper>
                  {site.siteMetadata.greenLinks.map(greenLink => <GreenLinks title={greenLink.title} links={greenLink.links}/>)}
                </LinkWrapper>
                <Icons.Wisconsin style={{maxWidth: 450, minWidth:300}} width={450} />
              </>
            )
            : (
              <>
                <LinkWrapper>
                  {firstHalfGreenLinks.map(greenLink => <GreenLinks left={greenLink.position} title={greenLink.title} links={greenLink.links}/>)}
                </LinkWrapper>
                <Icons.Wisconsin style={{maxWidth: 450, minWidth:300}} width={450} />
                <LinkWrapper>
                  {secondHalfGreenLinks.map(greenLink => <GreenLinks right={greenLink.position} title={greenLink.title} links={greenLink.links}/>)}
                </LinkWrapper>
              </>
            )
          }
        </WisconsinWrapper>
      </Section>
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
        style={{ textAlign: 'center', marginBottom: 100 }}
      >
        <h1>OUR GALLERY</h1>
        <Gallery
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
          ]}
        />
        <br />
        <Button
          style={{ width: 300, margin: 'auto' }}
          to="/Gallery"
        >
          SEE MORE
        </Button>
      </Section>
      <Section
        color={Colors.White}
        bgColor={Colors.Grey}
        image={VintageTwo.childImageSharp.fluid}
        padding={false}
      >
        <TopGrunge />
        <Icons.StopOnInn style={{ margin: '150px auto', float: 'unset', position: 'relative', fill: Colors.White, maxWidth: 500, minWidth: 300 }} width="100%" />
        <BottomGrunge />
      </Section>
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
        anchor="Contact"
      >
        <Split>
          <Map>
            <MyIframe
              title="Google Maps"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11205.441255117561!2d-91.8317355!3d45.4020733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5ce376dfb42f21d5!2sStop+On+Inn+Motel+%26+Campground!5e0!3m2!1sen!2sus!4v1560530977675!5m2!1sen!2sus"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></MyIframe>
          </Map>
          <VerticalSplit>
            <h2>We are waiting for you</h2>
            <ContactInfoLine tag="a" href={site.siteMetadata.addressHref} icon={Icons.Map} text={site.siteMetadata.address} />
            <ContactInfoLine tag="a" href={site.siteMetadata.phoneHref} icon={Icons.Phone} text={site.siteMetadata.phone} />
            <ContactInfoLine tag="a" href={site.siteMetadata.emailHref} icon={Icons.Envelop} text={site.siteMetadata.email}/>
            <ContactInfoLine icon={Icons.Clock} text={site.siteMetadata.hours} />
            <ContactInfoLine tag="a" href={site.siteMetadata.facebookHref} icon={Icons.Facebook} text={site.siteMetadata.facebook}/>
            <Button
              to={site.siteMetadata.links.find(link => link.name === "SEND US A MESSAGE").to}
            >
              SEND US A MESSAGE
            </Button>
          </VerticalSplit>
        </Split>
      </Section>
      <Testimonials />
    </Layout>
  )
}

export default withBreakpoints(IndexPage)

const VerticalSplit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Shadow = styled.div`
  text-shadow: 0 0 72px #000;
  max-width: 714px;
  text-align: center;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 50px;

  & p {
    font-size: 140%;
  }
`

const TheBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`

const Split = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  & div {
    min-width: 250px;
    max-width: 450px;
    width: 100%;
  }

  & > div {
    margin-bottom: 25px;
  }
`

const WisconsinWrapper = styled.div`
  text-align: center;
  /* height: 500px; */
  display: flex;
  justify-content: center;
  flex-wrap: ${props => props.MobileView ? 'wrap' : 'unset'};
`

const LinkWrapper = styled.div`
  min-width: 250px;
  max-width: 450px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`

const Map = styled.div`
  overflow: hidden;
  z-index: 1;
  position: relative;
  height: 500px;
  margin: 0 10px;
  width: 49vw;
  @media (max-width:${BreakPoints.tablet}px) {
    width: 98vw;
  }
`

const MyIframe = styled.iframe`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const Button = styled(Link)`
  background-color: ${Colors.Peach};
  border: none;
  width: 100%;
  font-family: 'Teko';
  font-size: 200%;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  displaY: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: ${Colors.Black};

  &:visited {
    color: ${Colors.Black};
  }
`

const TextLink = styled(Link)`
  color: ${Colors.DarkGreen};
  white-space: nowrap;
  /* text-decoration: none; */

  &:visited {
    color: ${Colors.DarkGreen};
  }
  &:hover {
    color: ${Colors.Peach};
  }
`
