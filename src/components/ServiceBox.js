import React, { Component } from 'react'
import styled from 'styled-components'
import PolygonIconGroup from './PolygonIconGroup'

export default class ServiceBox extends Component {
  render() {
    const {
      title,
      text,
      Icon,
      width,
      ...rest
    } = this.props
    return (
      <Wrapper>
        <PolygonIconGroup align='flex-start' icon={Icon} width={width} />
        <h4>{title}</h4>
        <p>
          {text}
        </p>
      </Wrapper>
    )
  }
}


const Wrapper = styled.section`
  padding: 20px;
  width: 250px;
  text-align: left;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  margin: 5px 15px;

  & p {
    font-size: 95%;
    margin: 0;
  }

  & > div {
    & div:first-of-type {
      & svg {
        transform-origin: center;
        transition: transform 500ms;
        transform: rotateZ(-10deg) translateX(-10px) translateY(-4px);
      }
    }
  }

  &:hover > div{
    & div:first-of-type {
      & svg {
        transform-origin: center;
        transform: rotateZ(0deg) translateX(0px) translateY(0px);
      }
    }
  }
`
