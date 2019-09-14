import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Section from '../components/Section'
import ServiceBox from '../components/ServiceBox'
import TopGrunge from "../components/TopGrunge"
import BottomGrunge from "../components/BottomGrunge"
import * as Icons from '../components/Icons'
import * as Colors from '../utils/colors'

export default function Services() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            services {
              Title
              Text
              Icon
              Width
            }
          }
        }
      }
    `
  )
  return (
    <Section
      color={Colors.Black}
      bgColor={Colors.Cream}
      padding={false}
      style={{textAlign: 'center'}}
    >
      <TopGrunge />
      <h1>WHAT WE OFFER</h1>
      <TheBoxes>
        {site.siteMetadata.services.map(service => (
          <ServiceBox
            Icon={Icons[service.Icon]}
            title={service.Title}
            text={service.Text}
            width={service.Width}
          />
        ))}
      </TheBoxes>
      <BottomGrunge />
    </Section>
  )
}

const TheBoxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
