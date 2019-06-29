import React from 'react'
import styled, { keyframes } from 'styled-components'
import * as Colors from '../utils/colors'

export default function Spinner() {
  return (
    <Wrapper>
      <Spin/>
    </Wrapper>
  )
}

const fadeScaleIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  70%{
    opacity: 1;
  }
  85% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`
const Spin = styled.span`
  width: 100px;
  height: 100px;
  animation: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s 1 both ${fadeScaleIn};
  display: inline-block;

  &:after {
    transition: inherit;
    opacity: inherit;
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid;
    border-color: ${Colors.DarkGreen} transparent ${Colors.DarkGreen} transparent;
    animation: ${spinner} 1.2s linear infinite;
  }
`
