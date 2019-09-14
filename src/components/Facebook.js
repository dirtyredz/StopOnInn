import React from 'react'
import styled from 'styled-components'
import * as Colors from '../utils/colors'

export default function Facebook() {
  return (
    <TextLink>
      Like us on FB
    </TextLink>
  )
}

const TextLink = styled(Link)`
  color: ${Colors.DarkGreen};
  white-space: nowrap;
  /* text-decoration: none; */

  &:visited {
    color: ${Colors.DarkGreen};
  }
  &:hover {
    color: ${Colors.Peach};
  }
`
