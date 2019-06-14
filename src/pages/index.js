import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainGrunge from "../components/MainGrunge"
import TopGrunge from "../components/TopGrunge"
import BottomGrunge from "../components/BottomGrunge"
import Section from '../components/Section'
import Box from '../components/Box'
import ServiceBox from '../components/ServiceBox'
import AboutPhoto from '../components/AboutPhoto'
import GreenLinks from '../components/GreenLinks'
import * as Icons from '../components/Icons'
import SmallOne from '../components/SmallOne'
import SmallTwo from '../components/SmallTwo'
import SmallThree from '../components/SmallThree'
import SmallFour from '../components/SmallFour'
import TallOne from '../components/TallOne'
import WideOne from '../components/WideOne'
import ContactInfoLine from '../components/ContactInfoLine'
import VintageImage from '../images/Vintage Header.png'
import StopOnInn from '../images/Stop On Inn Vintage.png'
import * as Colors from '../utils/colors'
import { withBreakpoints } from 'react-breakpoints'
import BreakPoints from '../utils/breakpoints'


const IndexPage = (props) => {
  const { breakpoints, currentBreakpoint } = props
  const MobileView = breakpoints[currentBreakpoint] <= breakpoints.mobileLandscape
  return (
    <Layout>
      <SEO title="Home" />
      <Section
        color={Colors.White}
        bgColor={Colors.Grey}
        image={VintageImage}
        padding={false}
      >
        <Shadow>
          <h1>Welcome to Stop On Inn</h1>
          <br />
          <p>We are a family-oriented motel & campground located near fishing, hiking, skiing, golfing, ATV and snowmobile trails. Whether you are a family or only one person, we are here to make your stay at Stop On Inn an enjoyable occasion.</p>
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
            text="Our hostel is located an hour from EAU airport and in the middle of tons of great activity opportunities. Were right off of Hwy 8 so it is quite easy to find us wherever you come from."
          />
          <Box
            Icon={Icons.Home}
            title="ACCOMMODATION SERVICES"
            text="Stop On Inn provides high-quality accommodation services to customers that come to our city from all over the world throughout the year."
          />
          <Box
            Icon={Icons.Star}
            title="GREAT EXPERIENCE"
            text="We are sure you will have a great experience of staying at Stop On Inn, See what our other customers have said about us."
          />
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
              Stop On Inn Motel & Campground, in Barron, WI, is the area's leading motel and campground serving Barron, Rice Lake, Cameron, Chetek and surrounding areas. It has been family owned and operated for 51 years. We offer internet, cable, a fridge, microwave, queen sized beds, coffee makers, full service hookup, a bathhouse, a children's play area, fire pits and much more. For your next stay, contact Stop On Inn Motel & Campground in Barron.
            </p>
          </div>
        </Split>
      </Section>
      <Section
        color={Colors.Black}
        bgColor={Colors.Cream}
        padding={false}
        style={{textAlign: 'center'}}
      >
        <TopGrunge />
        <h1>WHAT WE OFFER</h1>
        <TheBoxes>
          <ServiceBox
            Icon={Icons.Map}
            title="LAUNDRY"
            text="Need to quickly wash your clothes? Our laundry is always at your service."
          />
          <ServiceBox
            Icon={Icons.Map}
            title="LAUNDRY"
            text="Need to quickly wash your clothes? Our laundry is always at your service."
          />
          <ServiceBox
            Icon={Icons.Map}
            title="LAUNDRY"
            text="Need to quickly wash your clothes? Our laundry is always at your service."
          />
          <ServiceBox
            Icon={Icons.Map}
            title="LAUNDRY"
            text="Need to quickly wash your clothes? Our laundry is always at your service."
          />
          <ServiceBox
            Icon={Icons.Map}
            title="LAUNDRY"
            text="Need to quickly wash your clothes? Our laundry is always at your service."
          />
          <ServiceBox
            Icon={Icons.Map}
            title="LAUNDRY"
            text="Need to quickly wash your clothes? Our laundry is always at your service."
          />
        </TheBoxes>
        <BottomGrunge />
      </Section>
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
        anchor="ThingsToDo"
        style={{ textAlign: 'center', marginBottom: 75, zIndex: 2 }}
      >
        <h1>ACTIVITIES</h1>
        <WisconsinWrapper MobileView={MobileView}>
          {MobileView
            ? (
              <>
                <LinkWrapper>
                  <GreenLinks title="BARRON COUNTY & CHETEK" links={[
                    { name: 'Barron County', url: 'https://www.visitbarroncounty.com/' },
                    { name: 'Visit Barron County', url: 'https://www.facebook.com/visitbarroncounty' },
                    { name: 'Pioneer Village Museum', url: 'https://www.pioneervillagemuseum.org/' },
                    { name: 'Discover Wisconsin', url: 'http://discoverwisconsin.com/search/barron+' },
                    { name: 'Explore Wisconsin', url: 'http://www.explorewisconsin.com/spotlight/barroncounty' },
                    { name: 'Rice Lake', url: 'http://ricelakewis.com/' },
                    { name: 'Indian Head County', url: 'http://www.wisconsinindianhead.org/area1.htm' },
                    { name: 'City of Barron', url: 'http://cityofbarron.com/' },
                    { name: 'City of Chetek', url: 'https://cityofchetek-wi.gov/' },
                  ]}/>
                  <GreenLinks title="ACTIVITIES" links={[
                    { name: '10 Things To Do', url: 'http://bobber.discoverwisconsin.com/10-things-barron-county/' },
                    { name: 'Chetek Activities', url: 'https://chetek.com/activities.html' },
                  ]}/>
                  <GreenLinks title="VENUES" links={[
                    { name: 'The Enchanted barn', url: 'http://theenchantedbarn.com/' },
                  ]}/>
                  <GreenLinks title="ENTERTAINMENT" links={[
                    { name: 'Red Barn Theatre', url: 'https://www.redbarntheatre-ricelake.com/' },
                  ]}/>
                  <GreenLinks title="ATV & SNOWMOBILE TRAILS" links={[
                    { name: 'Barron Sheriff', url: 'http://barronsheriff.org/atv-information/' },
                    { name: 'Dusty Trail Finders ATV Club', url: 'https://www.facebook.com/Dusty-Trail-Finders-ATV-Club-130618027023966/' },
                    { name: 'Wisconsin ATV & UTV Trails', url: 'https://www.travelwisconsin.com/things-to-do/outdoor-fun/atv-and-utv' },
                    { name: 'Wisconsin ATV Trails and Maps', url: 'https://www.traillink.com/stateactivity/wi-atv-trails/' },
                    { name: 'Barron County Snowmobile Trail Report', url: 'http://snowtracks.com/reports/trail-report-rice-lake-barron-county-wisconsin-february-7-2019/' },
                    { name: 'Travel Wisconsin Snowmobile Snow Report', url: 'https://www.travelwisconsin.com/snowreport/snowmobile' },
                    { name: 'Rice Lake Snowmobile', url: 'http://ricelakewis.com/recreation/snowmobiling/' },
                  ]}/>
                  <GreenLinks title="GOLF" links={[
                    { name: 'Rolling Oaks Golf', url: 'https://www.rollingoaksgolf.net/' },
                    { name: 'Pine Crest Golf', url: 'http://www.pinecrestdallas.com/' },
                    { name: 'Turtleback Golf', url: 'https://www.turtlebackgolf.com/' },
                  ]}/>
                  <GreenLinks title="WINERIES" links={[
                    { name: 'Valkyrie Brewery', url: 'http://www.valkyriebrewery.com/' },
                    { name: 'LEINENKUGEL', url: 'https://leinie.com/av?url=https://leinie.com/leinie-lodge' },
                    { name: 'Clove Meadow Winery', url: 'https://clovermeadow.com/' },
                    { name: 'White Wolf Distillery', url: 'http://www.perlickdistillery.com/' },
                  ]}/>
                </LinkWrapper>
                <Icons.Wisconsin style={{maxWidth: 450, minWidth:300}} width={450} />
              </>
            )
            : (
              <>
                <LinkWrapper>
                  <GreenLinks left={-20} title="BARRON COUNTY & CHETEK" links={[
                    { name: 'Barron County', url: 'https://www.visitbarroncounty.com/' },
                    { name: 'Visit Barron County', url: 'https://www.facebook.com/visitbarroncounty' },
                    { name: 'Pioneer Village Museum', url: 'https://www.pioneervillagemuseum.org/' },
                    { name: 'Discover Wisconsin', url: 'http://discoverwisconsin.com/search/barron+' },
                    { name: 'Explore Wisconsin', url: 'http://www.explorewisconsin.com/spotlight/barroncounty' },
                    { name: 'Rice Lake', url: 'http://ricelakewis.com/' },
                    { name: 'Indian Head County', url: 'http://www.wisconsinindianhead.org/area1.htm' },
                    { name: 'City of Barron', url: 'http://cityofbarron.com/' },
                    { name: 'City of Chetek', url: 'https://cityofchetek-wi.gov/' },
                  ]}/>
                  <GreenLinks left={-40} title="ACTIVITIES" links={[
                    { name: '10 Things To Do', url: 'http://bobber.discoverwisconsin.com/10-things-barron-county/' },
                    { name: 'Chetek Activities', url: 'https://chetek.com/activities.html' },
                  ]}/>
                  <GreenLinks left={-10} title="VENUES" links={[
                    { name: 'The Enchanted barn', url: 'http://theenchantedbarn.com/' },
                  ]}/>
                  <GreenLinks left={30} title="ENTERTAINMENT" links={[
                    { name: 'Red Barn Theatre', url: 'https://www.redbarntheatre-ricelake.com/' },
                  ]}/>
                </LinkWrapper>
                <Icons.Wisconsin style={{maxWidth: 450, minWidth:300}} width={450} />
                <LinkWrapper>
                  <GreenLinks right={10} title="ATV & SNOWMOBILE TRAILS" links={[
                    { name: 'Barron Sheriff', url: 'http://barronsheriff.org/atv-information/' },
                    { name: 'Dusty Trail Finders ATV Club', url: 'https://www.facebook.com/Dusty-Trail-Finders-ATV-Club-130618027023966/' },
                    { name: 'Wisconsin ATV & UTV Trails', url: 'https://www.travelwisconsin.com/things-to-do/outdoor-fun/atv-and-utv' },
                    { name: 'Wisconsin ATV Trails and Maps', url: 'https://www.traillink.com/stateactivity/wi-atv-trails/' },
                    { name: 'Barron County Snowmobile Trail Report', url: 'http://snowtracks.com/reports/trail-report-rice-lake-barron-county-wisconsin-february-7-2019/' },
                    { name: 'Travel Wisconsin Snowmobile Snow Report', url: 'https://www.travelwisconsin.com/snowreport/snowmobile' },
                    { name: 'Rice Lake Snowmobile', url: 'http://ricelakewis.com/recreation/snowmobiling/' },
                  ]}/>
                  <GreenLinks right={-40} title="GOLF" links={[
                    { name: 'Rolling Oaks Golf', url: 'https://www.rollingoaksgolf.net/' },
                    { name: 'Pine Crest Golf', url: 'http://www.pinecrestdallas.com/' },
                    { name: 'Turtleback Golf', url: 'https://www.turtlebackgolf.com/' },
                  ]}/>
                  <GreenLinks right={30} title="WINERIES" links={[
                    { name: 'Valkyrie Brewery', url: 'http://www.valkyriebrewery.com/' },
                    { name: 'LEINENKUGEL', url: 'https://leinie.com/av?url=https://leinie.com/leinie-lodge' },
                    { name: 'Clove Meadow Winery', url: 'https://clovermeadow.com/' },
                    { name: 'White Wolf Distillery', url: 'http://www.perlickdistillery.com/' },
                  ]}/>
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
        <Grid>
          <div className="Small"><SmallOne/></div>
          <div className="Small"><SmallTwo/></div>
          <div className="Tall"><TallOne/></div>
          <div className="Small"><SmallThree/></div>
          <div className="Wide"><WideOne/></div>
          <div className="Small"><SmallFour/></div>
        </Grid>
      </Section>
      <Section
        color={Colors.White}
        bgColor={Colors.Grey}
        image={StopOnInn}
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
            <h2>We are Waiting for you</h2>
            <ContactInfoLine tag="a" href="https://goo.gl/maps/3JYtL7wxrjJYkrsf8" icon={Icons.Map} text="1521 E DIVISION STREET, BARRON, WI 54812" />
            <ContactInfoLine tag="a" href="tel:1-715-637-3154" icon={Icons.Phone} text="1(715) 637-3154"/>
            <ContactInfoLine tag="a" href="mailto:stoponinnmotelandcampground@gmail.com" icon={Icons.Envelop} text="stoponinnmotelandcampground@gmail.com"/>
            <ContactInfoLine icon={Icons.Clock} text="8:00 am to 6:00 pm" />
          </VerticalSplit>
        </Split>
      </Section>
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  @media (max-width: ${BreakPoints.tablet}px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
  @media (max-width: ${BreakPoints.mobileLandscape}px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  /* grid-template-columns: auto 200px 200px 200px 200px auto; */
  grid-template-rows: 200px 200px;
  @media (max-width: ${BreakPoints.tablet}px) {
    grid-template-rows: 100px 100px;
  }
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  justify-items: stretch;

  & div {
    background-color: red;
    /* place-self: center; */
  }

  & .Small {
    &:nth-of-type(1) {
      background-color: green;
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 1;
      grid-row-end: 1;
    }
    &:nth-of-type(2) {
      background-color: orange;
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 1;
    }
    &:nth-of-type(6) {
      background-color: purple;
      grid-column-start: 4;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 1;

      @media (max-width: ${BreakPoints.tablet}px) {
        display: none;
      }
    }
    &:nth-of-type(4) {
      background-color: blue;
      grid-column-start: 4;
      grid-column-end: 4;
      grid-row-start: 2;
      grid-row-end: 2;

      @media (max-width: ${BreakPoints.tablet}px) {
        display: none;
      }
    }
  }
  & .Tall {
    background-color: pink;
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;

    @media (max-width: ${BreakPoints.mobileLandscape}px) {
      display: none;
    }
  }
  & .Wide {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
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
