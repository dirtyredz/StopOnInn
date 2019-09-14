import React from 'react'
import styled from 'styled-components'
import { Polygon } from './Icons'
import * as Colors from '../utils/colors'

export default function PolygonIconGroup(props) {
  const Icon = props.icon
  const width = props.width
  console.log(width)
  return (
    <Wrapper align={props.align}>
      <Polygon width={45}/>
      {Icon && <Icon width={width}/>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: ${props => props.align ? props.align : 'center'};
  height: 50px;
  margin-bottom: 20px;
  position: relative;

  & div:first-of-type {
    fill: ${Colors.Peach};
    position: absolute;
  }

  & div:last-of-type {
    fill: ${Colors.DarkGreen};
    position: absolute;
    margin-top: 5px;
  }
`
