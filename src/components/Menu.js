import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"
import * as Colors from '../utils/colors'
import BreakPoints from '../utils/breakpoints'

export default class Menu extends Component {
  render() {
    return (
      <Spread>
        <MenuButton to="">HOME</MenuButton>
        <MenuButton to="#ThingsToDo">THINGS TO DO</MenuButton>
        <MenuButton to="">FAQ</MenuButton>
        <MenuButton to="">TESTIMONIALS</MenuButton>
        <MenuButton to="#Contact">CONTACT</MenuButton>
      </Spread>
    )
  }
}

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
  color: ${Colors.White};

  &:visited {
    color: inherit;
  }

  &:hover {
    background-color: ${Colors.LightGreen};
    color: ${Colors.LightGrey}
  }
`
