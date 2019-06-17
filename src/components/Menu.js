import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'
import { useStaticQuery, graphql } from "gatsby"

function Menu(props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            links {
              name
              to
            }
          }
        }
      }
    `
  )

  return (
    <Spread>
      {site.siteMetadata.links.map(link => <MenuButton to={link.to}>{link.name}</MenuButton>)}
    </Spread>
  )
}

export default Menu

const Spread = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: ${BreakPoints.tablet}px) {
    justify-content: center;
  }
`

const MenuButton = styled(Link)`
  displaY: flex;
  justify-content: center;
  flex-direction: column;
  height: 50px;
  padding: 35px 20px;
  text-decoration: none;
  font-family: 'Teko';
  font-size: 160%;
  font-weight: bold;
  white-space: nowrap;
  color: inherit;

  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: ${Colors.LightGreen};
    color: ${Colors.LightGrey}
  }
`
