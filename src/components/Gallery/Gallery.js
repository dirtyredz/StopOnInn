import React, { Component } from 'react'
import Modal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components'
import NoScroll from 'no-scroll'
import ImageModal from './Modal'
import BreakPoints from '../../utils/breakpoints'
import Img from "gatsby-image"

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      openedIndex: null
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  componentDidMount() {
    Modal.setAppElement('#___gatsby')
  }

  openModal(index) {
    console.log('OPEN MODAL')
    this.setState({modalIsOpen: true, openedIndex: index});
    NoScroll.on()
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false, openedIndex: null});
    NoScroll.off()
  }

  handlePrevious() {
    var prev = this.state.openedIndex - 1
    if (prev < 0) {
      prev = this.props.images.length - 1
    }
    this.setState({openedIndex: prev});
  }

  handleNext() {
    var next = this.state.openedIndex + 1
    if (next >= this.props.images.length) {
      next = 0
    }
    this.setState({openedIndex: next});
  }

  handleSelect(index) {
    this.setState({openedIndex: index});
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Grid
          maxColumns={this.props.maxColumns}
          minColumns={this.props.minColumns}
          minRowHeight={this.props.minRowHeight}
          maxRowHeight={this.props.maxRowHeight}
        >
          {this.props.images.map((image, index) => {
            const { fluid, ...rest } = image
            return (
              <Child
                {...rest}
                key={`thumbnail_${index}`}
                className="test"
                onClick={this.openModal.bind(this, index)}
              >
                <MyImage fluid={fluid} />
              </Child>
            )
          })}
          {/* images={this.props.images.map((image, index) => {
            const Original = image.component
            return { ...image, component: () => (
              <Original
                onClick={(e) => console.log(e) | this.openModal.bind(this, index)}
                key={`thumbnail_${index}`}
                className="test"
                style={{ pointerEvents: this.state.openedIndex === index ? 'none' : 'unset' }}
              />
            )}
          })} */}
        </Grid>
        {typeof this.state.openedIndex == 'number' &&  (
          <ImageModal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            openedIndex={this.state.openedIndex}
            handleNext={this.handleNext}
            handlePrevious={this.handlePrevious}
            handleSelect={this.handleSelect}
            images={this.props.images}
          />
        )}
      </>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  .ReactModal__Overlay{
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.83) !important;
    cursor: pointer;
  }
`

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

const MyImage = styled(Img)`
  cursor: pointer;
  height: 100%;
  width: 100%;
  transition: transform 250ms, width 500ms, height 500ms;

  & img {
    margin: 0;
  }
  &:hover {
    transform: scale(1.1);
    z-index: 99;
  }
`
