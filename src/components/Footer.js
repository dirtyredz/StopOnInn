import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import * as Colors from '../utils/colors'
import TopGrungeTwo from './TopGrungeTwo'
import TopGrunge from './TopGrunge'
import ContactInfoLine from './ContactInfoLine'
import MotelLogoTwo from './MotelLogoTwo'
import SendMessageForm from './SendMessageForm'
import Menu from './Menu'
import * as Icons from './Icons'
import BreakPoints from '../utils/breakpoints'
import { useStaticQuery, graphql } from "gatsby"

const Footer = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
            emailHref
            phone
            phoneHref
          }
        }
      }
    `
  )

  return (
    <Section
      color={Colors.Black}
      bgColor={Colors.DarkGreen}
      tag="footer"
      padding={false}
    >
      <TopGrunge />
      <Split>
        <VerticalSplit>
          <MotelLogoTwo/>
          <div>
            <ContactInfoLine tag="a" href={site.siteMetadata.phoneHref} icon={Icons.Phone} text={site.siteMetadata.phone}/>
            <ContactInfoLine tag="a" href={site.siteMetadata.emailHref} icon={Icons.Envelop} text={site.siteMetadata.email}/>
          </div>
        </VerticalSplit>
        <SendMessageForm />
      </Split>
      <br />
      <Section
        color={Colors.Cream}
        bgColor={Colors.LightGreen}
        padding={false}
        style={{fontSize: '80%'}}
      >
        <TopGrungeTwo />
        <Split swap>
          <VerticalSplit>
            <h3>Stop On Inn © <time>{new Date().getFullYear()}</time> All Rights Reserved</h3>
            <span>Website by <MyLink href="https://digitalredz.com">Digital Redz</MyLink></span>
          </VerticalSplit>
          <Menu />
        </Split>
      </Section>
    </Section>
  )
}

Footer.propTypes = {

}

export default Footer

const Split = styled.div`
  display: flex;
  flex-wrap: ${props => props.swap ? 'wrap-reverse' : 'wrap'};
  justify-content: space-around;

  & > div {
    padding: 25px 0;
    width: 100%;
    max-width: 45vw;
    min-width: 300px;
    @media (max-width: ${BreakPoints.tabletLandscape}px) {
      padding: 25px 50px;
      max-width: 100%;
    }
  }
`

const VerticalSplit = styled.div`
  display: flex;
  flex-direction: column;

  & > div:last-of-type {
    padding: 25px;
  }
`

const MyLink = styled.a`
  color: ${Colors.Red};
  text-decoration: none;

  &:visited {
    color: inherit;
  }
  &:hover {
    color: ${Colors.LightGrey};
  }
`
