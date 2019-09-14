import PropTypes from "prop-types"
import styled from 'styled-components'
import React from "react"
import Section from './Section'
import VerticleBar from './VerticleBar'
import MotelLogo from './MotelLogo'
import * as Icons from './Icons'
import * as Colors from '../utils/colors'
import Menu from './Menu'
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
            emailHref
            phone
            phoneHref
            hours
          }
        }
      }
    `
  )

  return (
    <>
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
        tag="header"
        padding={false}
      >
        <Spread>
          <MotelLogo/>
          <TopMenu>
            <div>
              <VerticleBar/><br />
              <OptionWrapper>
                <div>
                  <Icons.Phone width={30} />
                  <ContentWrapper>
                    <header>Contact Phone:</header>
                    <a href={site.siteMetadata.phoneHref}>{site.siteMetadata.phone}</a>
                  </ContentWrapper>
                </div>
              </OptionWrapper>
              <VerticleBar/><br />
              <OptionWrapper>
                <div>
                  <Icons.Clock width={30} />
                  <ContentWrapper>
                    <header>Office Hours:</header>
                    <p>{site.siteMetadata.hours}</p>
                  </ContentWrapper>
                </div>
              </OptionWrapper>
              <VerticleBar/><br />
              <OptionWrapper>
                <div>
                  <Icons.Envelop width={30} />
                  <ContentWrapper>
                    <header>Contact Email:</header>
                    <a href={site.siteMetadata.emailHref} >{site.siteMetadata.email}</a>
                  </ContentWrapper>
                </div>
              </OptionWrapper>
            </div>
          </TopMenu>
        </Spread>
      </Section>
      <Section
        color={Colors.White}
        bgColor={Colors.DarkGreen}
        tag="menu"
        padding={false}
        style={{margin: 0, padding: 0}}
      >
        <Menu/>
      </Section>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const Spread = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const TopMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: row;
  }
`

const OptionWrapper = styled.div`
  padding: 5px;

  & > div {
    display: flex;
    flex-direction: row;
  }

  & svg {
    fill: ${Colors.Peach}
  }
`


const ContentWrapper = styled.div`
  margin: 0 5px;
  white-space: nowrap;

  & header {
    font-size: 80%;
    min-width: 30px;
  }

  & p, a {
    letter-spacing: 0;
    font-size: 80%;
    word-break: break-all;
    display: inline-block;
    white-space: normal;
    margin: 0;
    font-weight: bold;
    text-decoration: none;
    color: ${Colors.Black};
  }

  & a:visited{
    color: inherit;
  }
`
