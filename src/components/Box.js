import React from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'
import PolygonIconGroup from './PolygonIconGroup'


export default function Box(props) {
  const {
    title,
    children,
    Icon,
  } = props
  return (
    <Wrapper>
      <PolygonIconGroup icon={Icon}/>
      <h4>{title}</h4>
      <hr/>
      <p>
        {children}
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  box-shadow: rgba(0,0,0,0.27) 0 0 8px;
  padding: 20px;
  background-color: ${Colors.White};
  max-width: 350px;
  min-width: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 25px;

  & hr {
    margin: 20px auto;
    width: 75px;
    height: 4px;
  }

  & p {
    font-size: 95%;
  }

  & > div {
    & div:first-of-type {
      & svg {
        transform-origin: center;
        transition: transform 500ms;
        transform: rotateZ(10deg) translateX(10px) translateY(-4px);
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
