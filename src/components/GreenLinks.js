import React, { Component } from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'
import BottomGrunge from "./BottomGrunge"
import { withBreakpoints } from 'react-breakpoints'

class GreenLinks extends Component {
  constructor() {
    super()

    this.state= {
      Open: false
    }

    this.onOpen = this.onOpen.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  onOpen() {
    this.setState({ Open: true })
  }

  onClose() {
    this.setState({ Open: false })
  }

  render() {
    const {
      title,
      links,
      breakpoints,
      currentBreakpoint,
      ...rest
    } = this.props
    const tablet = breakpoints[currentBreakpoint] === breakpoints.tablet
    const tabletLandscape = breakpoints[currentBreakpoint] === breakpoints.tabletLandscape
    const desktop = breakpoints[currentBreakpoint] === breakpoints.desktop

    const { Open } = this.state
    return (
      <GroupBox
        tablet={tablet}
        tabletLandscape={tabletLandscape}
        desktop={desktop}
        onMouseEnter={this.onOpen}
        onMouseLeave={this.onClose}
        onClick={() => Open ? this.onClose : this.onOpen}
        {...rest}
      >
        <h3 style={{ textTransform: 'uppercase' }}>{title}</h3>
        <ul style={{ maxHeight: Open ? '700px' : 0 }}>
          {links.map(link => <li><a href={link.url} >{link.name}</a></li>)}
        </ul>
        <BottomGrunge margin={0}/>
      </GroupBox>
    )
  }
}

export default withBreakpoints(GreenLinks)

const GroupBox = styled.div`
  background-color: ${Colors.DarkGreen};
  color: ${Colors.Cream};
  text-align: left;
  padding: 0;
  position: relative;
  cursor: 'pointer';
  left: ${props => props.left ? `${props.left}px` : 'unset'};
  right: ${props => props.right ? `${props.right}px` : 'unset'};

  & h3 {
    font-size: ${props =>
      props.landscape
        ? '60%'
        : props.tabletLandscape
          ? ' 75%'
          : props.desktop
            ? '85%'
            : 'unset'}
  }

  & h3, ul {
    padding: 0 15px;
  }

  & ul {
    margin: 0;
    margin-left: 30px;
    list-style: none;
    position: absolute;
    overflow: hidden;
    z-index: 1;
    max-height: 0;
    background-color: ${Colors.DarkGreen};
    box-shadow: 0 0 7px ${Colors.Black};
    /* padding: 20px; */
    transition: max-height 200ms;
  }

  & a {
    color: inherit;
  }
  & a:visited {
    color: inherit;
  }
`
