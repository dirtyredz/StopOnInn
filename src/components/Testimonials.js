import React, { Component } from 'react'
import Section from './Section'
import Spinner from './Spinner'
import * as Colors from '../utils/colors'
import axios from 'axios'
import StarRatings from 'react-star-ratings';
import styled from 'styled-components'


export default class Testimonials extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      loading: false,
      page: 0
    }

    this.fetchReviews = this.fetchReviews.bind(this)
  }

  fetchReviews() {
    const { page, reviews } = this.state
    this.setState({ loading: true })
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}http://www.stoponinnmotelandcampgroundwi.com/Home/GetEnhancedTestimonialReviewInfo?id=16371&pageIndex=${page}&pageSize=5&notReputation=false`,{
        timeout: 20000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .then((res) => {
        var el = document.createElement( 'html' );
        el.innerHTML = res.data;
        const ReviewEl = el.querySelectorAll('.review-info')
        const newReviews = Array.from(ReviewEl).map(node => {
          const Link = node.querySelectorAll('.external-review-link')[0]
          return {
            Author: node.querySelectorAll('.review-author')[0].innerHTML,
            Review: node.querySelectorAll('.review')[0].innerHTML,
            ExternalLink: Link && Link.getAttribute('href'),
            Internal: !Link,
            Date: node.querySelectorAll('.review-date')[0].innerHTML,
            Rating: parseFloat(node.querySelectorAll('.star-rating-image')[0]
              .getAttribute('src')
              .match(new RegExp('star_yellow_(.*).png'))[1]),
          }
        })
        this.setState({ reviews: [...reviews, ...newReviews], loading: false, page: page + 1 })
      })
      .catch((err) => {
        console.log(err)
        this.setState({ loading: false })
      })
  }

  componentDidMount() {
    this.fetchReviews()
  }

  render() {
    return (
      <Section
        color={Colors.Black}
        bgColor={Colors.White}
        anchor="Testimonials"
        style={{ textAlign: 'center', marginBottom: 100 }}
      >
        <h1>TESTIMONIALS</h1>
        <ReviewWrapper>
          {this.state.reviews.length > 0
            ? this.state.reviews.map(review => (
              <>
                <Review>
                  <StarRatings
                    rating={review.Rating}
                    starRatedColor="#FFC116"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension="25px"
                    starSpacing="1px"
                  />
                  <span>{review.Rating}</span><br />
                  <Author>{review.Author}</Author>&nbsp;&nbsp;&nbsp;<Date>{review.Date}</Date><br />
                  <span>{review.Review}</span><br />
                  {review.Internal
                    ? <Internal>Testimonial submitted directly on this site</Internal>
                    : <GoTo target="_blank" href={review.ExternalLink}>Go To Testimonial</GoTo>}
                  <hr />
                </Review>
              </>
            ))
            : <Spinner />
          }
        </ReviewWrapper>
        <Button
          onClick={this.fetchReviews}
          disabled={this.state.loading}
        >
          {this.state.loading ? 'LOADING...' : 'SHOW MORE'}
        </Button>
      </Section>
    )
  }
}


const Author = styled.span`
  font-weight: bold;
  font-size: 110%;
`

const Date = styled.span`
  font-weight: bold;
  font-size: 70%;
`

const GoTo = styled.a`
  text-decoration: none;
  color: ${Colors.Grey};
  font-weight: bold;
  font-size: 90%;
  text-align: right;
  width: 100%;
  display: inline-block;

  &:hover {
    color: ${Colors.Black};
    text-decoration: underline;
  }
`

const ReviewWrapper = styled.div`
  min-height: 100px;
  width: 100%;
  margin-bottom: 30px;
  position: relative;
`

const Internal = styled.span`
  color: ${Colors.Grey};
  font-weight: bold;
  font-size: 80%;
  text-align: right;
  width: 100%;
  display: inline-block;
`

const Review = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  text-align: left;
  font-size: 90%;
`

const Button = styled.button`
  background-color: ${Colors.Peach};
  border: none;
  width: 50%;
  font-family: 'Teko';
  font-size: 200%;
  cursor: pointer;
`
