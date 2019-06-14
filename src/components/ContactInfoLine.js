import React from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'

export default function ContactInfoLine(props) {
  const { icon, tag, ...rest } = props
  const TheIcon = icon
  return (
    <Wrapper as={tag} {...rest}>
      <TheIcon width={30} />
      <h5>{props.text}</h5>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  fill: ${Colors.Peach};
  margin-bottom: 10px;
  text-decoration: none;
  color: ${Colors.Black};
  
  &:visited {
    color: inherit;
  }
  & h5 {
    margin-left: 15px;
    letter-spacing: 1px;
  }
`
