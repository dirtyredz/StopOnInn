import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as Colors from '../utils/colors'
// import FishScales from '../images/FishScales.jpg'

class Section extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const {
      bgColor,
      color,
      padding,
      anchor,
      tag,
      image,
      children,
      style,
      ...rest
    } = this.props
    return (
      <Wrapper
        as={tag}
        style={style}
      >
        {image && <Image image={image}/>}
        <Content
          padding={padding}
          color={color}
          bgColor={bgColor}
          image={image}
          {...rest}
        >
          <a // eslint-disable-line
            name={anchor}
            href={`#${anchor}`}
            aria-label={anchor}
          ></a>
          {children}
        </Content>
      </Wrapper>
    )
  }
}

Section.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  anchor: PropTypes.string,
  tag: PropTypes.string,
  padding: PropTypes.bool,
}

Section.defaultProps = {
  bgColor: Colors.Black,
  color: Colors.White,
  anchor: "Section",
  tag: "section",
  padding: true,
}

export default Section

const Wrapper = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
`

const Content = styled.div`
  padding: ${props => props.padding ? "20px calc(1% + 1vw)" : "0"};
  color: ${props => props.color};
  background-color: ${props => props.image ? 'unset' : props.bgColor};
`

// filter: blur(2.5px);
const Image = styled.div`
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: ${props => props.bgColor};
  width: 100%;
  background-position: center;
  background-image: ${props => `url("${props.image}")`};
  background-size: cover;
`
