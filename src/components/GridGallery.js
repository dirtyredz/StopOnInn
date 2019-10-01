import React from 'react'
import styled from 'styled-components'
import BreakPoints from '../utils/breakpoints'

export default function GridGallery({ maxColumns, minColumns, minRowHeight, maxRowHeight, images  }) {
  return (
    <Grid
      maxColumns={maxColumns}
      minColumns={minColumns}
      minRowHeight={minRowHeight}
      maxRowHeight={maxRowHeight}
    >
      {images.map((image, index) => {
        const { component: Image, ...rest } = image
        console.log(Image)
        return <Child {...rest}><Image /></Child>
      })}
    </Grid>
  )
}

const Child = styled.div`
  /* grid-column-start: ${({cStart}) => cStart};
  grid-column-end: ${({cEnd}) => cEnd};
  grid-row-start: ${({rStart}) => rStart};
  grid-row-end: ${({rEnd}) => rEnd}; */
  grid-row: span ${({rSpan}) => rSpan};
  grid-column: span ${({cSpan}) => cSpan};
`

const Grid = styled.div`
  grid-auto-flow: dense;
  display: grid;
  grid-template-columns: repeat(${({maxColumns}) => maxColumns}, minmax(100px, 1fr));
  @media (max-width: ${BreakPoints.tablet}px) {
    grid-template-columns: repeat(${({maxColumns}) => maxColumns}, minmax(100px, 1fr));
  }
  @media (max-width: ${BreakPoints.mobileLandscape}px) {
    grid-template-columns: repeat(${({minColumns}) => minColumns}, minmax(100px, 1fr));
  }
  /* grid-template-columns: auto 200px 200px 200px 200px auto; */
  grid-auto-rows: ${({minRowHeight, maxRowHeight}) => `minmax(${minRowHeight}px, ${maxRowHeight}px)`};
  /* grid-template-rows: 200px 200px; */
  /* grid-template-rows: minmax(200px, 200px); */
  @media (max-width: ${BreakPoints.tablet}px) {
    grid-auto-rows: ${({minRowHeight, maxRowHeight}) => `minmax(${minRowHeight / 2}px, ${maxRowHeight / 2}px)`};
  }
  grid-row-gap: 5px;
  grid-column-gap: 5px;
  justify-items: stretch;

  /* & .Wide {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  } */
`
